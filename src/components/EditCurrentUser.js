import React from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { editCurrentUser, deleteCurrentUser } from '../actions/currentUser';
import { editGreetings } from '../containers/PageGreetings'

const EditCurrentUser = ({ currentUser, deleteCurrentUser, editCurrentUser, history }) => {

  const handleOnSubmit = ( event, formData ) => {
    event.preventDefault()
    editCurrentUser({
      ...formData,
      currentUser
    }, history)
  }

  return (
    <div className="edit-form">
      { editGreetings() }
      <UserForm editMode handleOnSubmit={ handleOnSubmit } />
      <button style={{ color: "red" }} onClick={()=>deleteCurrentUser(currentUser, history)}>Delete Account</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { editCurrentUser, deleteCurrentUser })(EditCurrentUser)
