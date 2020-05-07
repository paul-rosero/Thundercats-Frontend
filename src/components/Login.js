import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js'
import { currentUserLogin } from '../actions/currentUser.js'
import { loginGreetings } from '../containers/PageGreetings'

const Login = ({ loginForm, updateLoginForm, currentUserLogin, history }) => {
    
    const handleInputChange = event => {
        const updatedFormInfo = {
            ...loginForm,
            [event.target.name]: event.target.value
        }
      updateLoginForm(updatedFormInfo)
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        currentUserLogin(loginForm, history)
    }

    return (
        <div className="login-form">
            {loginGreetings()}
            <form name="login-form" onSubmit={handleOnSubmit}>
                <label>Username: </label>
                <input name="username" type="text" onChange={handleInputChange} />

                <label>Password: </label>
                <input name="password" type="text" onChange={handleInputChange} />
            
                <input type="submit" value="Log In" />
            </form> 
        </div>
        
    )
}

const mapStateToProps = ({ loginForm }) => {
    return { loginForm }
}

export default connect(mapStateToProps, { updateLoginForm, currentUserLogin })(Login);