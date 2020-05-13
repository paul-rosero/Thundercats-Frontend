import React from 'react'

export const signupGreetings = () => {
    return (
        <div className="signup-greeting">
            <h3>All are Welcomed in Third Earth.</h3>
            <h5>Please Fill in all the information to create an account.</h5>
        </div>
    )
}

export const loginGreetings = () => {
    return (
        <div className="login-greeting">
            <h3>Welcome back to Third Earth!</h3>
            <h5>Please Sign in to enter.</h5>
        </div>
    )
}

export const profileGreetings = (currentUser) => {
    return (
        <div className="profile-greetings">
            { currentUser ? <h2>Welcome {currentUser.attributes.name}!</h2> : <h2>Welcome Thundercat, Please login</h2>}
        </div>
    )
}


