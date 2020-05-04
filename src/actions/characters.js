//synchronous actions
export const setMyChars = characters => {
    return {
        type: "SET_MY_CHARACTERS",
        characters
    }
}

//asynchronous actions 

export const getMyChars = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/characters", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(response => { dispatch(setMyChars(response.data))})
        
    }
}