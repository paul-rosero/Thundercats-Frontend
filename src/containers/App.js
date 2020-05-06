
import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { getCurrentUser} from '../actions/currentUser';
import NavBar from '../components/NavBar';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Signup from '../components/Signup';
import ProfilePage from './ProfilePage.js';

import Home from './Home';
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props   
    return (
      <div className="App">   
        {loggedIn ? <Logout/> : null}
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/' render={(props) => loggedIn ? <ProfilePage {...props}/> : <Home {...props} />} />
        {/* <Route exact path='' component={} /> */}
        {/* <Route exact path='' component={} /> */}
  
        
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
