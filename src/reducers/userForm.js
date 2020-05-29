const initialState = {
    name: "",
    email: "",
    username: "",
    password: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_USER_FORM" :
            const res = {
                ...state,
                [action.formData.name]: action.formData.value 
            }
            return res
        case "SET_FORM_DATA_FOR_EDIT":
            return action.userFormData
        case "RESET_PASSWORD_FORM" :
            const pass = {
                ...state,
                [action.formData.password]: ""
            }
            return pass
        case "RESET_USER_FORM" :
            return initialState
        default :
            return state
    }
}