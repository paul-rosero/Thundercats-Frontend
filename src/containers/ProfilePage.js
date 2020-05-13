import React from 'react';
import { connect } from 'react-redux';
import CharHeadshots from './CharHeadshots';
import UserInfo from '../components/UserInfo';
import { profileGreetings } from './PageGreetings';
  
const ProfilePage = ({currentUser}) => {
    return (
        <div className="profile-page">
            { profileGreetings(currentUser) } 
             <UserInfo currentUser={currentUser} />
            <CharHeadshots currentUser={currentUser}/>
        </div>
            
    )
}

const mapStateToProps = ({currentUser}) => {
    return {currentUser}
  }  

export default connect(mapStateToProps)(ProfilePage)
