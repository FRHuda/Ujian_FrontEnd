import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../supports/css/components/loginPage.css';
import { onLogin } from '../Action';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';

const cookies = new Cookies();

class loginPage extends Component {

    componentWillReceiveProps(newProps){
        if (newProps.auth.username !== "") {
            cookies.set('myCat', newProps.auth.email, {path : '/'});
        }
    }

    onLoginClick = () => {
        var email = this.refs.email.value;
        var password = this.refs.password.value;

        this.props.onLogin({ email, password });
    }

    render() {
        if (this.props.auth.username === "") {
            return (
                <div className='login-background'>
                    <div className="container">
                        <h1 className="form-heading">login Form</h1>
                        <div className="login-form">
                            <div className="main-div">
                                <div className="panel">
                                    <h2>Login</h2>
                                    <p>Please enter your email and password</p>
                                </div>
                                <form id="Login">
                                    <div className="form-group">
                                        <input ref='email' type="email" className="form-control" id="inputEmail" placeholder="Email Address"/>
                                    </div>
                                    <div className="form-group">
                                        <input ref='password' type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                                    </div>
                                    <div className="forgot">
                                        <Link to='/register'>Register</Link>
                                    </div>
                                    <input type="button" className="btn btn-primary" onClick={this.onLoginClick} value='Login'/>
                                    <h2 className="label-danger">{this.props.auth.error}</h2>
                                </form>
                            </div>
                            <p className="botto-text"> Designed by Sunil Rajput</p>
                        </div>
                    </div>
                </div>           
            );
        }
        return <Redirect to='/'/>
    }
}

const mapStateToProps = (state) =>{
    const auth = state.auth;

    return {auth };
}

export default connect(mapStateToProps, {onLogin})(loginPage);