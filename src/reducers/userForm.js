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
        case "RESET_USER_FORM" :
            return initialState
        default :
            return state
    }
}