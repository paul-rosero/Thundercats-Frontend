import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEditForm, edit } from '../actions/editForm';
import { editGreetings } from '../containers/PageGreetings'


class EditCurrentUser extends Component {

    handleInputChange = event => {
        const { name, value } = event.target
        const { editForm } = this.props
        console.log('this.props', this.props)
        console.log('name', name)
        console.log('value', value)
        const updatedFormInfo = {
            ...editForm,
            [name]: value
        }
        console.log('updateEditForm(updatedFormInfo)', updateEditForm(updatedFormInfo))
        updateEditForm(updatedFormInfo)
    }

    // handleSubmit = (formData) => {
    //     const { updateTrip, trip, history } = this.props
    //     updateTrip({
    //       ...formData,
    //       tripId: trip.id
    //     }, history)
    //   }

    render(state) {
        console.log('state', state)
        // const { name, username, email } = this.state.editForm
        return (
            <div className="edit-form">
                { editGreetings() }
                <form name="edit-form" /* onSubmit={handleOnSubmit} */>
                    <label>Name: </label>
                    <input name="name" type="text" value={this.name} onChange={this.handleInputChange} /><br/>

                    <label>Email: </label>
                    <input name="email" type="text" value={this.email} onChange={this.handleInputChange} /><br/>

                    <label>Username: </label>
                    <input name="username" type="text" value={this.username} onChange={this.handleInputChange} /><br/>

                    <input type="submit" value="Edit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        editForm: state.editForm,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { updateEditForm, edit })(EditCurrentUser)
