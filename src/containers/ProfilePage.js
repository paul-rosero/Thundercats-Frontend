import React from 'react';
import { connect } from 'react-redux';
import CharHeadshots from './CharHeadshots';
  
const ProfilePage = ({currentUser}) => {
    return (
        <div className="profile-page">
            <div className="greeting">
                { currentUser ? <h3>Welcome {currentUser.attributes.name}!</h3> : <h3>Welcome Thundercat, Please login</h3>}
            </div>
            <div className="current-user-information">
                <h5>Username: {currentUser.attributes.username}</h5>
            </div>
            <div className="characters-picture-container">
            <table className="characters-picture-table">
                <colgroup>
                    <col span="2"/>
                </colgroup>
                <tbody >
                    <CharHeadshots currentUser={currentUser}/>
                </tbody>
            </table>
            </div>
            
            
        </div>
            
    )
}

const mapStateToProps = ({currentUser}) => {
    return {currentUser}
  }  

export default connect(mapStateToProps)(ProfilePage)
