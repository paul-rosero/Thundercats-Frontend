import React from 'react'
import { Link} from 'react-router-dom'
import LikeButton from '../components/LikeButton'
import { DisplayLikeHeart } from '../components/DisplayLikeHeart'

const CharHeadshots = ({ characters }) => {
    const mappedChars = characters.map((character, index) => 
        <li key={ index } className="character">
            <DisplayLikeHeart character={character} />
            <Link 
                to={{
                    pathname: `/characters/${character.attributes.name}`,
                    state: { character }
                }}><img key={`${character.attributes.name}`} src={process.env.PUBLIC_URL + `/character_images/${character.attributes.name}.jpg`} alt={`${character.attributes.name}`} />
            </Link>  
            <LikeButton character={character}/>
        </li>
    )
 
    return (         
        <div className="characters-picture">
            <ul>
                { mappedChars }
            </ul>
        </div>   
    )
}

export default CharHeadshots;
