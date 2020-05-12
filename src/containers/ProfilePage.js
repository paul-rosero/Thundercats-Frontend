import React from 'react';
import { connect } from 'react-redux';
import CharHeadshots from './CharHeadshots';
  
const ProfilePage = ({currentUser}) => {
    return (
        <div className="profile-page">
            <div className="greeting">
                { currentUser ? <h3>Welcome {currentUser.attributes.name}!</h3> : <h3>Welcome Thundercat, Please login</h3>}
            </div>
            <CharHeadshots currentUser={currentUser}/>
        </div>
            
    )
}

const mapStateToProps = ({currentUser}) => {
    return {currentUser}
  }  

export default connect(mapStateToProps)(ProfilePage)
