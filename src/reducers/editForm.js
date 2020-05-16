const initialState = {
    name: "",
    email: "",
    username: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_EDIT_FORM" :
            const res = {
                ...state,
                [action.formData.name]: action.formData.value 
            }
            return res
        // case "RESET_EDIT_FORM" :
        //     return initialState
        default :
            return state
    }
}