import React from 'react'
import { Link} from 'react-router-dom'

const CharHeadshots = () => {
    // const charPicArr = [
    //   <Link to='/characters/lion-o' ><img key="lion-o" src={process.env.PUBLIC_URL + '/character_images/lion-o.jpg'} alt="lion-o" /></Link>,
    //   <Link to='/characters/tygra' ><img key="tygra" src={process.env.PUBLIC_URL + '/character_images/tygra.jpg'} alt="tygra" /></Link>,
    //   <Link to='/characters/panthro' ><img key="panthro" src={process.env.PUBLIC_URL + '/character_images/panthro.jpg'} alt="panthro" /></Link>,
    //   <Link to='/characters/cheetara' ><img key="cheetara" src={process.env.PUBLIC_URL + '/character_images/cheetara.jpg'} alt="cheetara" /></Link>
    //   ]
    return (
        <div>
           <Link to='/characters/lion-o' ><img key="lion-o" src={process.env.PUBLIC_URL + '/character_images/lion-o.jpg'} alt="lion-o" /></Link>
           <Link to='/characters/tygra' ><img key="tygra" src={process.env.PUBLIC_URL + '/character_images/tygra.jpg'} alt="tygra" /></Link>
           <Link to='/characters/panthro' ><img key="panthro" src={process.env.PUBLIC_URL + '/character_images/panthro.jpg'} alt="panthro" /></Link>
           <Link to='/characters/cheetara' ><img key="cheetara" src={process.env.PUBLIC_URL + '/character_images/cheetara.jpg'} alt="cheetara" /></Link>
            {/* { charPicArr } */}
        </div>
    )
}

export default CharHeadshots
