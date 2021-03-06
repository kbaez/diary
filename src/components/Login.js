import React, { Component } from 'react';
import {connect} from 'react-redux';
import {googleLogin} from '../actions/userAction';

class Login extends Component{

    componentWillMount(){
        if(this.props.user !== null){
           //this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user !== null){
            //nextProps.history.push('/');
        }
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 jumbotron" style={{marginTop: '-20px'}}>
                        <h1>DIARY | {new Date().getFullYear()}</h1>
                        <h2>Login with your favorite <b>Social Network</b> to start writting!</h2>
                    </div>
                    <div className="col-sm-6 text-center">
                        <button className="btn btn-danger btn-lg" onClick={this.props.googleLogin}>
                            Login with Google
                        </button>
                    </div>
                        <br/>
                    <div className="col-sm-6 text-center">
                        <button className="btn btn-danger btn-lg">
                            Login with Twitter
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {googleLogin})(Login);