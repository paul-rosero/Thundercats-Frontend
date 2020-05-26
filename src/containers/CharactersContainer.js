//stateless component 2
import React from 'react';
import { connect } from 'react-redux';
import CharacterCard from '../components/CharacterCard'

const Characters = ({ characters }) => {
    const charCard = characters.find(character => character.id === props.location.state.characters.id )
    
    return (
        <CharacterCard key={ charCard.id } character={ charCard } /> 
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        characters: currentUser.relationships.characters
    }
}

export default connect(mapStateToProps)(Characters);