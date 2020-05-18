import React, { Component } from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { editCurrentUser, deleteCurrentUser } from '../actions/currentUser';
import { setFormDataForEdit, resetUserForm } from '../actions/userForm';
import { editGreetings } from '../containers/PageGreetings'

class EditCurrentUser extends Component {
    componentDidMount(){
        const { currentUser, setFormDataForEdit } = this.props
        currentUser && setFormDataForEdit(currentUser)
      }
    
      componentDidUpdate(prevProps) {
        const { currentUser, setFormDataForEdit } = this.props
        currentUser && !prevProps.currentUser && setFormDataForEdit(currentUser)
      }

      componentWillUnmount() {
        const { resetUserForm } =this.props
        resetUserForm()
      }

    handleSubmit = ( formData, EditCurrentUser ) => {
        
        const { editCurrentUser, currentUser, history } = this.props
        console.log('currentUser', currentUser)
        editCurrentUser({
          ...formData,
          currentUserId: currentUser.id
        }, history)
      }

    render() {
        const { history, deleteCurrentUser, currentUser } = this.props
        return (
            <div className="edit-form">
                { editGreetings() }
                <UserForm editMode handleOnSubmit={event => {
                    event.preventDefault()
                    this.handleOnSubmit() 
                }} />
                <button style={{color: "red"}} onClick={()=>deleteCurrentUser(currentUser, history)}>Delete Account</button>
            </div>
        )
    }
}

export default connect(null, { resetUserForm, setFormDataForEdit, editCurrentUser, deleteCurrentUser })(EditCurrentUser)
