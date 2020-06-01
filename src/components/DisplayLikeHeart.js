import React from 'react'

export const DisplayLikeHeart = ({ character }) => {
    return (
        <div className="favorite-heart">
           { character.attributes.favorite ? <img className='favorite-heart' src={process.env.PUBLIC_URL + '/favorite.png'} alt='favorite-heart' />  : <img className='unfavorite-heart' src={process.env.PUBLIC_URL + '/unfavorite.png'} alt='unfavorite-heart' /> }
        </div>
    )
}
