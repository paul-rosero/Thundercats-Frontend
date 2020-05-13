import React from 'react'
import { Link} from 'react-router-dom'

const CharHeadshots = ({currentUser}) => {
    return (         
        <table className="characters-picture-table">
            <tbody>
                <tr>
                    <td>
                        <Link to={{
                            pathname: '/characters/jaga',
                            state: {characters: currentUser.relationships.characters[0]}
                        }}><img key="jaga" src={process.env.PUBLIC_URL + '/character_images/jaga.jpg'} alt="jaga" /></Link> 
                    </td>  
                    <td>
                        <Link to={{
                            pathname:'/characters/lion-o', 
                            state: {characters: currentUser.relationships.characters[1]}
                        }}><img key="lion-o" src={process.env.PUBLIC_URL + '/character_images/lion-o.jpg'} alt="lion-o" /></Link>
                    </td>
                    <td>
                        <Link to={{
                            pathname: '/characters/tygra',
                            state: {characters: currentUser.relationships.characters[2]}
                        }}><img key="tygra" src={process.env.PUBLIC_URL + '/character_images/tygra.jpg'} alt="tygra" /></Link>
                    </td>
                    <td> 
                        <Link to={{
                            pathname: '/characters/panthro',
                            state:{characters: currentUser.relationships.characters[3]}
                        }}><img key="panthro" src={process.env.PUBLIC_URL + '/character_images/panthro.jpg'} alt="panthro" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link to={{
                            pathname: '/characters/cheetara',
                            state: {characters: currentUser.relationships.characters[4]}
                        }}><img key="cheetara" src={process.env.PUBLIC_URL + '/character_images/cheetara.jpg'} alt="cheetara" /></Link> 
                    </td>
                    <td>
                        <Link to={{
                            pathname: '/characters/wilykat',
                            state: {characters: currentUser.relationships.characters[5]}
                        }}><img key="wilykat" src={process.env.PUBLIC_URL + '/character_images/wilykat.jpg'} alt="wilykat" /></Link> 
                    </td>
                    <td>
                        <Link to={{
                            pathname: '/characters/wilykit',
                            state: {characters: currentUser.relationships.characters[6]}
                        }}><img key="wilykit" src={process.env.PUBLIC_URL + '/character_images/wilykit.jpg'} alt="wilykit" /></Link> 
                    </td>
                    <td>
                        <Link to={{
                            pathname: '/characters/lynx-o',
                            state: {characters: currentUser.relationships.characters[7]}
                        }}><img key="lynx-o" src={process.env.PUBLIC_URL + '/character_images/lynx-o.jpg'} alt="lynx-o" /></Link> 
                    </td>  
                </tr>
                <tr>
                    <td>
                        <Link to={{
                            pathname: '/characters/bengali',
                            state: {characters: currentUser.relationships.characters[8]}
                        }}><img key="bengali" src={process.env.PUBLIC_URL + '/character_images/bengali.jpg'} alt="bengali" /></Link> 
                    </td>
                    <td>
                        <Link to={{
                            pathname: '/characters/pumyra',
                            state: {characters: currentUser.relationships.characters[9]}
                        }}><img key="pumyra" src={process.env.PUBLIC_URL + '/character_images/pumyra.jpg'} alt="pumyra" /></Link> 
                    </td>  
                    <td>
                        <Link to={{
                            pathname: '/characters/snarf',
                            state: {characters: currentUser.relationships.characters[10]}
                        }}><img key="snarf" src={process.env.PUBLIC_URL + '/character_images/snarf.jpg'} alt="snarf" /></Link> 
                    </td>  
                    <td>
                        <Link to={{
                            pathname: '/characters/snarfer',
                            state: {characters: currentUser.relationships.characters[11]}
                        }}><img key="snarfer" src={process.env.PUBLIC_URL + '/character_images/snarfer.jpg'} alt="snarfer" /></Link> 
                    </td>    
                </tr>
                <tr>
                    <td>
                        <Link to={{
                            pathname: '/characters/mum-ra',
                            state: {characters: currentUser.relationships.characters[12]}
                        }}><img key="mum-ra" src={process.env.PUBLIC_URL + '/character_images/mumm-ra-mummy.jpg'} alt="mum-ra" /></Link>
                    </td> 
                    <td>
                        <Link to={{
                            pathname: '/characters/s-s-slithe',
                            state: {characters: currentUser.relationships.characters[13]}
                        }}><img key="s-s-slithe" src={process.env.PUBLIC_URL + '/character_images/s-s-slithe.jpg'} alt="s-s-slithe" /></Link> 
                    </td>  
                    <td>
                        <Link to={{
                            pathname: '/characters/jackalman',
                            state: {characters: currentUser.relationships.characters[14]}
                        }}><img key="jackalman" src={process.env.PUBLIC_URL + '/character_images/jackalman.jpg'} alt="jackalman" /></Link> 
                    </td>  
                    <td>
                        <Link to={{
                            pathname: '/characters/monkian',
                            state: {characters: currentUser.relationships.characters[15]}
                        }}><img key="monkian" src={process.env.PUBLIC_URL + '/character_images/monkian.jpg'} alt="monkian" /></Link> 
                    </td>  
                </tr>
                <tr>
                    <td>
                        <Link to={{
                            pathname: '/characters/vultureman',
                            state: {characters: currentUser.relationships.characters[16]}
                        }}><img key="vultureman" src={process.env.PUBLIC_URL + '/character_images/vultureman.jpg'} alt="vultureman" /></Link> 
                    </td>
                    <td>
                        <Link to={{
                            pathname: '/characters/ratar-o',
                            state: {characters: currentUser.relationships.characters[17]}
                        }}><img key="ratar-o" src={process.env.PUBLIC_URL + '/character_images/ratar-o.jpg'} alt="ratar-o" /></Link>
                    </td>  
                    <td>
                        <Link to={{
                            pathname: '/characters/luna',
                            state: {characters: currentUser.relationships.characters[18]}
                        }}><img key="luna" src={process.env.PUBLIC_URL + '/character_images/luna.jpg'} alt="luna" /></Link> 
                    </td>  
                    <td>
                        <Link to={{
                            pathname: '/characters/amok',
                            state: {characters: currentUser.relationships.characters[19]}
                        }}><img key="amok" src={process.env.PUBLIC_URL + '/character_images/amok.jpg'} alt="amok" /></Link> 
                    </td>  
                </tr>
                <tr>
                    <td>
                        <Link to={{
                            pathname: '/characters/aluro',
                            state: {characters: currentUser.relationships.characters[20]}
                        }}><img key="aluro" src={process.env.PUBLIC_URL + '/character_images/aluro.jpg'} alt="aluro" /></Link> 
                    </td>  
                    <td>
                        <Link to={{
                            pathname: '/characters/red-eye',
                            state: {characters: currentUser.relationships.characters[21]}
                        }}><img key="red-eye" src={process.env.PUBLIC_URL + '/character_images/red-eye.jpg'} alt="red-eye" /></Link> 
                    </td> 
                    <td>
                        <Link to={{
                            pathname: '/characters/tug-mug',
                            state: {characters: currentUser.relationships.characters[22]}
                        }}><img key="tug-mug" src={process.env.PUBLIC_URL + '/character_images/tug-mug.jpg'} alt="tug-mug" /></Link> 
                    </td> 
                    <td>
                        <Link to={{
                            pathname: '/characters/chilla',
                            state: {characters: currentUser.relationships.characters[23]}
                        }}><img key="chilla" src={process.env.PUBLIC_URL + '/character_images/chilla.jpg'} alt="chilla" /></Link> 
                    </td> 
                </tr>
            </tbody> 
        </table>    
    )
}

export default CharHeadshots
