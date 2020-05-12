import React from 'react';

const CharacterCard = ({location}) => {
    return (
      <div className="CharacterCard">
        <p>Name: {location.state.characters.attributes.name}</p>
        <p>Favorite: </p>
        <p>Gender: {location.state.characters.attributes.gender}</p>
        <p>Species: {location.state.characters.attributes.species}</p>
        <p>Weapon(s): {location.state.characters.attributes.weapons}</p>        
        <p>Overview: {location.state.characters.attributes.overview}</p>
      </div>
    )    
}

export default CharacterCard;