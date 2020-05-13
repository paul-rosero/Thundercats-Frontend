import React from 'react'

const UserInfo = ({currentUser}) => {
    return (
        <div className="" >
            <p>Username: {currentUser.attributes.username}</p>
            <p>Email: {currentUser.attributes.email}</p>
            <p>Name: {currentUser.attributes.name}</p>
        </div>
    )
}

export default UserInfo
