import { setCurrentUser } from "./currentUser"

//synchronous action creators
//stateless component3
export const updateEditForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_EDIT_FORM",
        formData
    }
}

export const setFormDataForEdit = currentUser => {
    const userFormData = {
      name: currentUser.attributes.name,
      email: currentUser.attributes.email,
      username: currentUser.attributes.username
    }
    return {
      type: "SET_FORM_DATA_FOR_EDIT",
      userFormData
    }
  }

// export const resetSignupForm = () => {
//     return {
//         type: "RESET_SIGNUP_FORM"
//     }
// }

//asynchronous action creators
export const edit = (editData, history) => {
    console.log('editData', editData)
    return async dispatch => {
       
        const userData ={
            user: editData
        } 
        const res = await fetch("http://localhost:3001/api/v1/users/:name/edit", {
            credentials: "include",
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        const user = await res.json()
        if (user.error) {
            alert(user.error)
        }
        else {
            dispatch(setCurrentUser(user.data))
            // dispatch(resetSignupForm())
            history.push(`/users/${user.data.attributes.name}`)
        }
    }
}