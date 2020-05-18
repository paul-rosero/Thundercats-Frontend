import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js'
import { currentUserLogin } from '../actions/currentUser.js'
import { loginGreetings } from '../containers/PageGreetings'
import { Link } from 'react-router-dom'


const Login = ({ loginForm, updateLoginForm, currentUserLogin, history }) => {
    const { username, password } = loginForm
    
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
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
                <input name="username" type="text" value={username} onChange={handleInputChange} />

                <label>Password: </label>
                <input name="password" type="text" value={password} onChange={handleInputChange} />
            
                <input type="submit" value="Log In" />
            </form> 
             <p>or <Link to='/signup'>Signup</Link> if you don't have an account.</p>
        </div>
    )
}

const mapStateToProps = ({ loginForm }) => {
    return { loginForm }
}

export default connect(mapStateToProps, { updateLoginForm, currentUserLogin })(Login);