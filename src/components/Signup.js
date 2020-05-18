import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/currentUser.js'
import { signupGreetings } from '../containers/PageGreetings.js';
import UserForm from './UserForm.js';

const Signup = ({ signup, history }) => {

    const handleOnSubmit = (event, formData) => {
        event.preventDefault()
        signup({
            ...formData
            }, history)
    }
   
    return (
        <div className="signup-form">
            { signupGreetings() }
            <UserForm history={history} handleOnSubmit={handleOnSubmit} />
        </div>
    )
}

export default connect(null, { signup })(Signup);