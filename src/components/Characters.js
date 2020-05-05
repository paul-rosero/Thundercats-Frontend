import React from 'react';
import { connect } from 'react-redux';
import CharacterCard from './CharacterCard'


const Characters = ({characters}) => {
    const charCard = characters.length > 0 ? characters.map(character => <CharacterCard key={character.id} characters={character} />) : ""
    return (
        <div className="Characters">
           { charCard }
        </div>
    )
}

/*
const mapStateToProps = ({currentUser}) => {
    return {
        characters: currentUser.attributes.characters
    }
}
*/

const mapStateToProps = ({characters}) => {
    return {
        characters
    }
}

export default connect(mapStateToProps)(Characters);