import React from 'react';

const CharacterCard = ({characters}) => {
    return (
      <div className="CharacterCard">
        <p>{characters.attributes.name}</p>
      </div>
    )    
}

export default CharacterCard;