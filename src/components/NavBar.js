import React from 'react';
import { connect } from 'react-redux';
// import Login from './Login'
// import Logout from './Logout'

const NavBar = ({ currentUser }) => {
    
    return (
       <div className="navbar" >
            {/* <div className="greeting">
                { currentUser ? <h3>Welcome {currentUser.attributes.name}!</h3> : <h3>Welcome Thundercat, Please login</h3>}
            </div> */}
            {/* <div className="nav-button">
                { currentUser ? <Logout /> : <Login /> }
            </div>         */}
       </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {currentUser}
  }  

export default connect(mapStateToProps)(NavBar);