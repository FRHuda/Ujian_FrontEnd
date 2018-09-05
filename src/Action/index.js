import axios from 'axios';
import {API_URL_1} from '../supports/api-url/apiurl';

export const onLogin = (user) => {
    return (dispatch) => {
        axios.get(API_URL_1 + '/users', {
            params:{
                email : user.email,
                password : user.password
            }
        }).then(user => {
            dispatch({
                type : "USER_LOGIN_SUCCESS",
                payload : { username : user.data[0].username, email : user.data[0].email, error:'' }
            });
        }).catch(err => {
            console.log(err);
            dispatch({
                type : "USER_LOGIN_FAIL"
            });
        })
    }
};

export const onLogOut = () => {
    return {
        type : "USER_LOGOUT"
    };
}

export const onRegister = (user) => {
    return (dispatch) => {
        axios.post(API_URL_1 + '/users', user)
        .then((res) => {
            console.log(res);
            dispatch({
                type : "USER_LOGIN_SUCCESS",
                payload : { username : res.data.username, email : res.data.email, error:'' }
            });
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const keepLogin = (email) => {
    return (dispatch) => {
        axios.get(API_URL_1 + '/users', {
            params:{
                email : email,
            }
        }).then(user => {
            dispatch({
                type : "USER_LOGIN_SUCCESS",
                payload : { username : user.data[0].username, email : user.data[0].email, error:'' }
            });
        }).catch(err => {
            console.log(err);
            dispatch({
                type : "USER_LOGIN_FAIL"
            });
        })
    }
};

export const onSelect = (page) => {
    return (dispatch) => {
        axios.get(API_URL_1+'/page', {
            params:{
                id : page,
            }
        }).then(user => {
            dispatch({
                type : "INI_PAGE",
                payload : { page : user.data[0].page}
            });
        }).catch(err => {
            console.log(err);
        })
    }
}