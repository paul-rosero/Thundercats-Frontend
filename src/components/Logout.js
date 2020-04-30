import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser.js'

const Logout = ({ logout }) => {
    return (
       <button onClick={ logout } className="logoutButton" >Logout</button>
    )
}

export default connect(null, { logout })(Logout);