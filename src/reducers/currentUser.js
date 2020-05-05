// const initialState = {
//     id: "",
//     attributes: {},
//     relationships: {
//         characters: []
//     }
// }

export default (state = null, action) => {
    switch(action.type) {
        case "SET_CURRENT_USER" :
            return action.user
        // case "SET_MY_CHARACTERS" :
        //     return {  ...state,
        //         relationships: {
        //             ...state.relationships, 
        //             characters: action.characters
        //         } 
        //     }
        case "CLEAR_CURRENT_USER" :
            return null
        default :
            return state
    }
}