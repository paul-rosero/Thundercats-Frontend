import React from 'react'

const LikeButton = (props) => {
    const handleOnClick = () => {
       return props.character.attributes.favorite = !props.character.attributes.favorite
    }

    return (
        <>
            <div className="like-button" >
                <button onClick={ handleOnClick } >{ props.character.attributes.favorite ? "UnLike Me" : "Like Me" }</button>
            </div>
        </>
    )
    
}

export default LikeButton
