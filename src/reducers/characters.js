export default (state = [], action) => {
    switch (action.type) {
        case "SET_MY_CHARACTERS" :
            return action.characters
        default :
            return state
    }
}