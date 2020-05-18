import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { getCurrentUser} from '../actions/currentUser';
import NavBar from '../components/NavBar';
import Login from '../components/Login';
import Signup from '../components/Signup';
import ProfilePage from './ProfilePage.js';
import Home from './Home';
import { Route, Switch, withRouter } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard';
import EditCurrentUser from '../components/EditCurrentUser';
class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, currentUser } = this.props
    return (
      <div className="App">  
        { loggedIn ? <NavBar location={this.props.location} /> : null }
        { !loggedIn ?  
          <>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/login' component={ Login } />
            <Route exact path='/signup' component={ Signup } />
          </>
          :  <Route exact path='/users/:name' render={(props) => <ProfilePage currentUser={currentUser} { ...props } />
        } /> }
        <Switch>
          <Route exact path='/characters/:name' component={ CharacterCard } />
         
          <Route exact path='/users/:name/edit' render={(props) => <EditCurrentUser currentUser={currentUser} { ...props } />
          }  />
        </Switch>  
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return ({
    loggedIn: !!currentUser,
    currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
