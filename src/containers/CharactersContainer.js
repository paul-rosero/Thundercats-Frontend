//stateless component 2
import React from 'react';
import { connect } from 'react-redux';
import CharacterCard from '../components/CharacterCard'

const Characters = (state) => {
    console.log('state2', state)
    const charCard = 
        // characters.length > 0 ? 
            state.characters.find(character => character.id === state.location.state.characters.id )
        // : null
    // console.log('charCard', charCard)
    
    return (
        <CharacterCard key={ charCard.id } character={ charCard } /> 
    )
}

const mapStateToProps = ( state ) => {
    console.log('state', state)
    return {
        characters: state.currentUser.relationships.characters
    }
    
}

export default connect(mapStateToProps)(Characters);