import React from 'react'

const LikeButton = (props) => {
    const handleOnClick = () => {
       props.character.attributes.favorite = !props.character.attributes.favorite
    }

        return (
            <>
                <div className="favorite-heart">
                    { character.attributes.favorite ? <img className='favorite-heart' src={process.env.PUBLIC_URL + '/favorite.png'} alt='favorite-heart' />  : <img className='unfavorite-heart' src={process.env.PUBLIC_URL + '/unfavorite.png'} alt='unfavorite-heart' /> }
                </div>
                <div className="like-button" >
                    {console.log('props.character2', props.character)}
                    
                    <button onClick={ handleOnClick } >{ props.character.attributes.favorite ? "UnLike Me" : "Like Me" }</button>
                </div>
            </>
        )
    
}

export default LikeButton
