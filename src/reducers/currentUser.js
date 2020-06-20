const initialState = {
    id: "",
    type: "",
    attributes: {
        name: "",
        username: "",
        email: ""
    },
    relationships: {
        characters: []
    }
}
export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_CURRENT_USER" :
            return action.user
        case "SET_MY_CHARACTERS" :
            return {  ...state,
                relationships: {
                    ...state.relationships, 
                    characters: action.characters
                } 
            }
        case 'UPDATED_CURRENT_USER' :
            return action.currentUser
        case 'SET_FAVORITE' :
            console.log('action', action)
        case "CLEAR_CURRENT_USER" :
            return initialState
        case "DELETE_CURRENT_USER" :
            return action.currentUser
        default :
            return state
    }
}