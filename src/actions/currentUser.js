//synchronous action creators
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}




//asynchronous action creators
export const login = loginData => {
    return dispatch => {
        return fetch("http://localhost:3001")
    }
}