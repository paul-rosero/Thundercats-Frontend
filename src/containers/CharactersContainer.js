//stateless component 2
import React from 'react';
import { connect } from 'react-redux';
import CharacterCard from './CharacterCard'

const Characters = ({characters}) => {
    const charCard = characters.map(character => <CharacterCard key={character.id} character={character} />) 
    
    return (
        { charCard }
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
        characters: currentUser.relationships.characters
    }
}

export default connect(mapStateToProps,)(Characters);