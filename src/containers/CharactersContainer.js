//stateless component 2
import React from 'react';
import { connect } from 'react-redux';
import CharacterCard from '../components/CharacterCard'

const Characters = (props) => {
    const charCard = props.characters.find(character => character.id === props.location.state.character.id )

    if (props.characters.length > 0) {
        return(
             <CharacterCard key={ charCard.id } character={ charCard } /> 
        )
    } else {
       return null
    }  
}

const mapStateToProps = ( state ) => {
    return {
        characters: state.currentUser.relationships.characters
    }
    
}

export default connect(mapStateToProps)(Characters);