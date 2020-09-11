import React from 'react'
import { likeCharacter } from '../actions/characters'

const LikeButton = ({currentUser, character, setFavorite}) => {
    const handleOnClick = () => {
        console.log(character)
        likeCharacter({...character,
            attributes: {
                ...character.attributes,
                favorite: !character.attributes.favorite}
        })
    }

    return (
        <>
            <div className="like-button" >
                <button onClick={ handleOnClick } >{ character.attributes.favorite ? "UnLike Me" : "Like Me" }</button>
            </div>
        </>
    )
    
}

export default LikeButton
