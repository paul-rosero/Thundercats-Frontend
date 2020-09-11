//synchronous actions
export const setMyChars = characters => {
    return {
        type: "SET_MY_CHARACTERS",
        characters
    }
}

export const setFavorite = character => {
    console.log(character)
    // delete currentUser.relationships.characters
    // currentUser.relationships = {
    //     characters: []
    // }
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

export const likeCharacter = (character, history) => {
    console.log("character", character)
    return async dispatch => {
        const res = await fetch(`http://localhost:3001/api/v1/characters/${character.id}`, {
            credentials: "include",
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify(character)
        })
        console.log(res.json())
        const user = await res.json()
        // if (user.error) {
        //     alert(user.error)
        // }
        // else {
            dispatch(setFavorite(user.data))
            dispatch(getMyChars());
        // }
    }
}