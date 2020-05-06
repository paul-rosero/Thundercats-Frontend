import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js'
// import { signup } from '../actions/currentUser.js'

const Signup = ({signupForm, updateSignupForm, /*signup*/ }) => {
    
    const handleInputChange = event => {
        const updatedFormInfo = {
            ...signupForm,
            [event.target.name]: event.target.value
        }
      updateSignupForm(updatedFormInfo)
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        // signup(signupForm)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label>Email: </label>
            <input name="email" type="text" onChange={handleInputChange} /><br/>
            <label>Username: </label>
            <input name="username" type="text" onChange={handleInputChange} /><br/>
            <label>Password: </label>
            <input name="password" type="text" onChange={handleInputChange} /><br />
            <input type="submit" value="Sign Up" />
        </form>
    )
}

const mapStateToProps = ({ signupForm }) => {
    return { signupForm }
}

export default connect(mapStateToProps, { updateSignupForm,  })(Signup);