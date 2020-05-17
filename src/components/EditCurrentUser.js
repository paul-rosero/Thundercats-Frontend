import React, { Component } from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { editCurrentUser } from '../actions/currentUser';
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

    handleSubmit = formData => {
        const { editCurrentUser, currentUser, history } = this.props
        editCurrentUser({
          ...formData,
          currentUser
        }, history)
      }

    render() {
        console.log('this', this)
        const { history, currentUser } = this.props
        return (
            <div className="edit-form">
                { editGreetings() }
                <UserForm editMode handleOnSubmit={this.handleOnSubmit} />
            </div>
        )
    }
}



export default connect(null, { resetUserForm, setFormDataForEdit, editCurrentUser })(EditCurrentUser)
