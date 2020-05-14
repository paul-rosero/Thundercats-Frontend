import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser.js'
import { signupGreetings } from '../containers/PageGreetings.js';

const Signup = ({signupForm, updateSignupForm, signup, history }) => {
    const { name, username, email, password } = signupForm

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupForm,
            [name]: value
        }
      updateSignupForm(updatedFormInfo)
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        signup(signupForm, history)
    }
   
    return (
        <div className="signup-form">
            { signupGreetings() }
            <form name="signup-form" onSubmit={handleOnSubmit}>
                <label>Name: </label>
                <input name="name" type="text" value={name} onChange={handleInputChange} /><br/>

                <label>Email: </label>
                <input name="email" type="text" value={email} onChange={handleInputChange} /><br/>

                <label>Username: </label>
                <input name="username" type="text" value={username} onChange={handleInputChange} /><br/>

                <label>Password: </label>
                <input name="password" type="text" value={password} onChange={handleInputChange} /><br />

                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}

const mapStateToProps = ({ signupForm }) => {
    return { signupForm }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);