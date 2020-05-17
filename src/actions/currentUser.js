import { resetLoginForm } from './loginForm.js';
import { resetUserForm } from './userForm.js';
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
export const signup = (signupData, history) => {
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
            dispatch(resetUserForm())
            history.push(`/users/${user.data.attributes.name}`)
        }
    }
}

export const currentUserLogin = (loginData, history) => {
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
            history.push(`/users/${user.data.attributes.name}`)
        }
    }
}

export const getCurrentUser = () => {
    return  async dispatch => {
        const res = await fetch("http://localhost:3001/api/v1/get_current_user", {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        });
        const user = await res.json();
        if (user.notice) {
            alert(user.notice);
        }
        else {
            dispatch(setCurrentUser(user.data));
            dispatch(getMyChars());
        }
    }
}

export const edit = (userData, history) => {
    console.log('userData', userData)
    return async dispatch => {
        const userData ={
            currentUser: userData
        } 
        const res = await fetch(`http://localhost:3001/api/v1/users/${userData.name}`, {
            credentials: "include",
            method: 'PATCH',
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
            // dispatch(resetSignupForm())
            history.push(`/users/${user.data.attributes.name}`)
        }
    }
}

export const logout = () => {
    return async dispatch => {
        dispatch(clearCurrentUser())
        await fetch('http://localhost:3001/api/v1/logout', {
            credentials: "include",
            method: "DELETE"
        });
    }
}