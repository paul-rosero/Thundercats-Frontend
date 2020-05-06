import { resetLoginForm } from './loginForm.js';
import { resetSignupForm } from './signupForm.js';
import { getMyChars } from './characters'

//stateless component1
//synchronous action creators
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER",
    }
}



//asynchronous action creators
export const signup = (signupData,history) => {
    return async dispatch => {
        const userData ={
            user: signupData
        }
        const res = await fetch("http://localhost:3001/api/v1/signup", {
            credentials: "include",
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        const user = await res.json()
        if (user.error) {
            alert(user.error)
        }
        else {
            dispatch(setCurrentUser(user.data))
            dispatch(getMyChars())
            dispatch(resetSignupForm())
            history.push('/')
        }
    }
}

export const currentUserLogin = (loginData, history) => {
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
            dispatch(setCurrentUser(user.data))
            dispatch(getMyChars())
            dispatch(resetLoginForm())
            history.push('/')
        }
    }
}

export const getCurrentUser = (history) => {
    return  dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(user => {
            if (user.notice) {
                alert(user.notice)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(getMyChars())
                // history.push('/')
            }
        })
        
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3001/api/v1/logout', {
            credentials: "include",
            method: "DELETE"
        })
        .then(res => res.json())
        .then(user => {
            alert(user.notice)
        })
    }
}