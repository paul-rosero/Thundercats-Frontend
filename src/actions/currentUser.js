//synchronous action creators
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}


//asynchronous action creators
export const currentUserLogin = loginData => {
    console.log(loginData)
    return async dispatch => {
        const res = await fetch("http://localhost:3001/api/v1/login", {
            credentials: "include",
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        const user = await res.json()
        if (user.error) {
            alert(user.error)
        }
        else {
            dispatch(setCurrentUser(user))
        }
    }
}

export const getCurrentUser = () => {
    return async dispatch => {
        const res = await fetch("http://localhost:3001/api/v1/get_current_user", {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
        const user = await res.json()
        if (user.notice) {
            alert(user.notice)
        }
        else {
            dispatch(setCurrentUser(user))
        }
    }
}