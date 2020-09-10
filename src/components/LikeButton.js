import React from 'react'

const LikeButton = ({currentUser, character, setFavorite}) => {
    const handleOnClick = () => {
       return character.attributes.favorite = !character.attributes.favorite
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
