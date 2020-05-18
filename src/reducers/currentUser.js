export default (state = null, action) => {
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
        case "CLEAR_CURRENT_USER" :
            return null
        case "DELETE_CURRENT_USER" :
            return action.currentUser
        default :
            return state
    }
}