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
            console.log('state', state)
            return
        case "CLEAR_CURRENT_USER" :
            return null
        default :
            return state
    }
}