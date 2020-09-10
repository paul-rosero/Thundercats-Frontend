import React from 'react'
import { Link} from 'react-router-dom'
import LikeButton from '../components/LikeButton'
import { DisplayLikeHeart } from '../components/DisplayLikeHeart'
import { setFavorite } from '../actions/characters'

const CharHeadshots = ({ characters, currentUser }) => {
    const mappedChars = characters.map((character, index) => 
        <li key={ index } className="character">
            <Link 
                to={{
                    pathname: `/characters/${character.attributes.name}`,
                    state: { character }
                }}><img key={`${character.attributes.name}`} src={process.env.PUBLIC_URL + `/character_images/${character.attributes.name}.jpg`} alt={`${character.attributes.name}`} />
            </Link>  
            <DisplayLikeHeart character={character} />
            <LikeButton character={character} currentUser={currentUser} setFavorite={setFavorite}/>
        </li>
    )
 
    return (         
        <ul className="characters-picture">
            { mappedChars }
        </ul>
    )
}

export default CharHeadshots;
