//stateless component4
import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { getCurrentUser} from '../actions/currentUser'
import NavBar from '../components/NavBar'
import CharactersContainer from './CharactersContainer';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {    
    return (
      <div>
        <NavBar />
        <CharactersContainer />
      </div>
      
    )
  }
}


export default connect(null, { getCurrentUser })(App);
