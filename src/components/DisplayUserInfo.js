import React from 'react'
import { Link } from 'react-router-dom'

const DisplayUserInfo = ({currentUser}) => {
    return (
        <div className="current-user-information" >
            <p>Username: {currentUser.attributes.username}</p>
            <p>Email: {currentUser.attributes.email}</p>
            <p>Name: {currentUser.attributes.name}</p>
            <Link to={{ pathname: `users/${currentUser.attributes.name}/edit`, state: { currentUser } }} >Edit User Info</Link>
        </div>
    )
}

export default DisplayUserInfo
