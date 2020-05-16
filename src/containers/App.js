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
import { EditCurrentUser } from '../components/EditCurrentUser';
class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">  
        { loggedIn ? <NavBar location={this.props.location} /> : null }
        { loggedIn ?  <Route exact path='/users/:name' component={ProfilePage}/> : <Route exact path='/' component={ Home }/> }
        <Switch>
          <Route exact path='/characters/:name' component={ CharacterCard } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/users/:name/edit' component={ EditCurrentUser} { ...this.props } />
          {/* <Route exact path='' component={} /> */}
        </Switch>  
      </div>
    )
  }
}

const mapStateToProps = ({currentUser}) => {
  return ({
    loggedIn: !!currentUser,
    currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
