import React from 'react';
import { connect } from 'react-redux';
import CharHeadshots from './CharHeadshots';
import DisplayUserInfo from '../components/DisplayUserInfo';
import { profileGreetings } from './PageGreetings';
  
const ProfilePage = ({ currentUser, characters }) => {
    return (
        <div className="profile-page">
            { profileGreetings(currentUser) } 
             <DisplayUserInfo currentUser={ currentUser } />
            <CharHeadshots currentUser={ currentUser } characters={characters}/>
        </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser,
        characters: currentUser.relationships.characters
    }
  }  

export default connect(mapStateToProps)(ProfilePage)
