import React from 'react';

const CharacterCard = ({ character }) => {
  return (
      <div className="CharacterCard">
        <p>Name: { character.attributes.name }</p>
        <p>Affiliation: { character.attributes.afiliation.name }</p>
        <p>Gender: { character.attributes.gender }</p>
        <p>Species: { character.attributes.species }</p>
        <p>Weapon(s): { character.attributes.weapons }</p>        
        <p>Overview: { character.attributes.overview }</p>
      </div>
    )    
}

export default CharacterCard;