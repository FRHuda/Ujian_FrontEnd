import React, { Component } from 'react';
import {Nav,Navbar,NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { keepLogin, onLogOut} from '../Action';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Header extends Component {

    componentWillMount() {
        const cookieNya = cookies.get('myCat');
            if (cookieNya !== undefined) {
                this.props.keepLogin(cookieNya);
            }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.auth.username === "" ) {
            cookies.remove('myCat');
        }
    }

    onLogOutClick = () => {
        this.props.onLogOut()
    }

    renderNavbar = () => {
        if (this.props.auth.username !=="") {
            return (
                <div>
                    <Navbar inverse fixedTop={true} collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to='/'>CINEMA 97</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                            <NavItem eventKey={2} href="#">
                                <Link to='/cinema'>Movie List</Link>
                            </NavItem>
                            </Nav>
                            <Nav pullRight>
                            <NavDropdown eventKey={1} title={"Hello, " + this.props.auth.username} id='basic-nav-dropdown'>
                            <MenuItem eventKey={4.1}>Profile</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={4.3} onSelect={this.onLogOutClick}>LogOut</MenuItem>
                            </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            );
        }
        return (
            <div>
                <Navbar inverse fixedTop={true} collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>CINEMA 97</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>>
                        <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            <Link to='/login'><span className="glyphicon glyphicon-log-in"></span><span> Log In</span></Link>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Link to='register'><span className='glyphicon glyphicon-user'></span><span> Sign Up</span></Link>
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }

    render() {
        return (
            this.renderNavbar()
        );
    }
}

const mapStateToProps = (state) => {
    const auth = state.auth;
    return {auth};
}

export default connect(mapStateToProps, {onLogOut, keepLogin})(Header);