import React, { Component } from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { editCurrentUser } from '../actions/currentUser';
import { setFormDataForEdit } from '../actions/userForm';
import { editGreetings } from '../containers/PageGreetings'

class EditCurrentUser extends Component {
    componentDidMount(){
        this.props.currentUser && this.props.setFormDataForEdit(this.props.currentUser)
      }
    
      componentDidUpdate(prevProps) {
        this.props.currentUser && !prevProps.currentUser && this.props.setFormDataForEdit(this.props.currentUser)
      }

    //   componentWillUnmount() {
    //     this.props.resetTripForm()
    //   }

    handleSubmit = formData => {
        const { editCurrentUser, currentUser, history } = this.props
        editCurrentUser({
          ...formData,
          currentUser
        }, history)
      }

    render() {
        console.log('props', this.props)
        // const { history } = this.props
        return (
            <div className="edit-form">
                { editGreetings() }
                <UserForm editMode handleOnSubmit={this.handleOnSubmit} />
            </div>
        )
    }
}



export default connect(null, { setFormDataForEdit, editCurrentUser })(EditCurrentUser)
