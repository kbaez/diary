import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser, logOut} from '../actions/userAction';

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavBar">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <Link className="navbar-brand" to="/">DIARY2018</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            {
                                this.props.user === null ? (
                                    <li><Link to="/login">LOGIN</Link></li>
                                ):(
                                    <li><Link to="/logout" onClick={this.props.logOut}>LOGOUT</Link></li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state, ownProps){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser, logOut})(Header);
