//stateless component3
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser.js'
import { withRouter } from 'react-router-dom';

const Logout = ({ logout, history }) => {
    return (
        <button onClick={() => {
            logout()
            history.push('/')
        } } className="logoutButton" >Logout</button>
    )
}

export default withRouter(connect(null, { logout })(Logout));