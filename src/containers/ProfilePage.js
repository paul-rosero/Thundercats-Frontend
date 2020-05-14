import React from 'react';
import { connect } from 'react-redux';
import CharHeadshots from './CharHeadshots';
import DisplayUserInfo from '../components/DisplayUserInfo';
import { profileGreetings } from './PageGreetings';
  
const ProfilePage = ({currentUser}) => {
    return (
        <div className="profile-page">
            { profileGreetings(currentUser) } 
             <DisplayUserInfo currentUser={currentUser} />
            <CharHeadshots currentUser={currentUser}/>
        </div>
            
    )
}

const mapStateToProps = ({currentUser}) => {
    return {currentUser}
  }  

export default connect(mapStateToProps)(ProfilePage)
