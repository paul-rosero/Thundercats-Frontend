//stateless component 6
import React from 'react';
// import Login from '../components/Login';
// import Logout from '../components/Logout'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Welcome to the Thundercats Page!</h2>
            <h4>You can <Link to='/signup'>Signup</Link> or <Link to='/login'>Login</Link></h4>
        </div>
    )
}

export default Home
