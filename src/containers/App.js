//stateless component4
import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { getCurrentUser} from '../actions/currentUser';
import NavBar from '../components/NavBar';
import Login from '../components/Login';
import Signup from '../components/Signup';
import CharactersContainer from './CharactersContainer';
import { Route } from 'react-router-dom'
class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {    
    return (
      <div className="App">
        <NavBar />
        <CharactersContainer />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        {/* <Route exact path='' component={} /> */}
        {/* <Route exact path='' component={} /> */}
        {/* <Route exact path='' component={} /> */}
      </div>
      
    )
  }
}


export default connect(null, { getCurrentUser })(App);
