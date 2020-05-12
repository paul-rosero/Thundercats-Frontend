import React from 'react'
import { Link} from 'react-router-dom'

const CharHeadshots = (props) => {
    return (
        <tr>
               <td>
                    <Link to={{
                        pathname:'/characters/lion-o', 
                        state: {characters: props.currentUser.relationships.characters[0]}
                    }}><img key="lion-o" src={process.env.PUBLIC_URL + '/character_images/lion-o.jpg'} alt="lion-o" /></Link>
                </td>
                <td>
                    <Link to={{
                        pathname: '/characters/tygra',
                        state: {characters: props.currentUser.relationships.characters[1]}
                    }}><img key="tygra" src={process.env.PUBLIC_URL + '/character_images/tygra.jpg'} alt="tygra" /></Link>
                </td>
                <td> 
                    <Link to={{
                        pathname: '/characters/panthro',
                        state:{characters: props.currentUser.relationships.characters[2]}
                    }}><img key="panthro" src={process.env.PUBLIC_URL + '/character_images/panthro.jpg'} alt="panthro" /></Link>
                </td>
                <td>
                    <Link to={{
                        pathname: '/characters/cheetara',
                        state: {characters: props.currentUser.relationships.characters[3]}
                    }}><img key="cheetara" src={process.env.PUBLIC_URL + '/character_images/cheetara.jpg'} alt="cheetara" /></Link> 
                </td>      
        </tr>
               
                   
               
    )
}

export default CharHeadshots
