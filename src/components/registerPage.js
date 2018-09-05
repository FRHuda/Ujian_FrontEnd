import React, { Component } from 'react';
import { onRegister } from '../Action';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../supports/css/components/loginPage.css';

class registerPage extends Component {

    
    onRegisterClick = () => {
        this.props.onRegister({
            username : this.refs.username.value,
            email : this.refs.email.value,
            password : this.refs.password.value
        });
    }

    render() {
        if (this.props.auth.username ===""){
            return(
                <div className='login-background'>
                    <div className="container">
                        <h1 className="form-heading">Register Form</h1>
                        <div className="login-form">
                            <div className="main-div">
                                <div className="panel">
                                    <h2>Register</h2>
                                    <p>Welcome, Lets join to our website</p>
                                </div>
                                <form id="Login">
                                    <div className='form-group'>
                                        <input ref='username' type='text' className='form-control' id='inputUsername' placeholder='Username'/>
                                    </div>
                                    <div className="form-group">
                                        <input ref='email' type="email" className="form-control" id="inputEmail" placeholder="Email Address"/>
                                    </div>
                                    <div className="form-group">
                                        <input ref='password' type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                                    </div>
                                    <input type='button' className="btn btn-primary" value='Register' onClick={this.onRegisterClick}/>
                                </form>
                            </div>
                            <p className="botto-text"> Designed by Sunil Rajput</p>
                        </div>
                    </div>
                </div>
            );
        }
        return (<Redirect to ='/'/>)
    }
}

const mapStateToProps = (state) => {
    return { auth : state.auth};
}

export default connect(mapStateToProps, {onRegister})(registerPage);