import React from 'react';
import { connect } from 'react-redux';
import { updateUserForm } from '../actions/userForm.js'

const UserForm = ({formData, updateUserForm, handleOnSubmit, editMode }) => {
    const { name, username, email, password } = formData

    const handleInputChange = event => {
        const { name, value } = event.target
        // const updatedFormInfo = {
        //     ...userForm,
        //     [name]: value
        // }
        // updateSignupForm(updatedFormInfo)
        updateUserForm(name, value)
    }

    return (
        <form onSubmit={ event => { 
            event.preventDefault() 
            handleOnSubmit(formData) 
        }}>

            <label>Name: </label>
            <input name="name" type="text" value={ name } onChange={ handleInputChange } /><br/>

            <label>Email: </label>
            <input name="email" type="text" value={ email } onChange={ handleInputChange } /><br/>

            <label>Username: </label>
            <input name="username" type="text" value={ username } onChange={ handleInputChange } /><br/>

            <label>Password: </label>
            <input name="password" type="text" value={ password } onChange={ handleInputChange } /><br />

            <input type="submit" value= { editMode ? "Update" : "Sign Up" } />

         </form>
       
    )
}

const mapStateToProps = ({ userForm, currentUser }) => {
    return { 
        formData: userForm,
        currentUser
     }
}

export default connect(mapStateToProps, { updateUserForm })(UserForm);