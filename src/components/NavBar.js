import React from 'react';
import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom'
import Logout from './Logout'
// import Login from './Login'


const NavBar = ({  loggedIn }) => {
    return (
       <div className="navbar" >
           {/* <NavLink exact to="/fav-characters">Fav Characters</NavLink> */}
           {/* <NavLink exact to="/" ></NavLink> */}
           {loggedIn ? <Logout/> : null}
       </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
  }  

export default connect(mapStateToProps)(NavBar);