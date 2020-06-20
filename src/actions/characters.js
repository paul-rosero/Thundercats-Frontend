//synchronous actions
export const setMyChars = characters => {
    return {
        type: "SET_MY_CHARACTERS",
        characters
    }
}

export const setFavorite = character => {
    return {
        type: "SET_FAVORITE",
        character
    }
}

//asynchronous actions 
export const getMyChars = () => {
    return async dispatch => {
        const charRes = await fetch("http://localhost:3001/api/v1/characters", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        const response = await charRes.json()
        dispatch(setMyChars(response.data))
    }
}