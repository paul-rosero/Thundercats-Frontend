import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser.js'
import { signupGreetings } from '../containers/PageGreetings.js';



const Signup = ({signupForm, updateSignupForm, signup, history }) => {
  
    const handleInputChange = event => {
        const updatedFormInfo = {
            ...signupForm,
            [event.target.name]: event.target.value
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
                <label for="name">Name: </label>
                <input name="name" type="text" onChange={handleInputChange} /><br/>

                <label for="email">Email: </label>
                <input name="email" type="text" onChange={handleInputChange} /><br/>

                <label for="username">Username: </label>
                <input name="username" type="text" onChange={handleInputChange} /><br/>

                <label for="password">Password: </label>
                <input name="password" type="text" onChange={handleInputChange} /><br />

                <input type="submit" value="Sign Up" />
            </form>
        </div>
        
    )
}

const mapStateToProps = ({ signupForm }) => {
    return { signupForm }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);