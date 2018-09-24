import React, { Component } from 'react'
import { connect } from 'react-redux'
// with withRouter you can get access to the history object's property
import {withRouter} from 'react-router-dom'
import {getUser} from '../actions/userAction'

class AuthenticationComponent extends Component{
    componentDidUpdate(){
        //make sure the loading is done then if no user
        //then push them to login page
        const {userLoading, user} = this.props;
        if(userLoading === false && !user){
            this.props.history.push()
        }
    }
}

function mapStateToProps(state){
    return {
        user: state.user,
        userLoading: state.loading.user,
    }
}

export default withRouter(connect(mapStateToProps, {getUser, getNotes})(AuthenticationComponent));
