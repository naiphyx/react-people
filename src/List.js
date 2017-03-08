import React from 'react';
import Person from './Person';

export default function List({entries, deleteHero, editHero, saveHero, updateActiveHero, activeHero}) {
  return <div className="theHeroList">
    {
      entries.map(
      (entry, index) => 
      <Person 	key={index} 
      			id={entry.id} 
      			name={entry.name} 
      			updateActiveHero={updateActiveHero.bind(this)} 
      			saveHero={saveHero.bind(this, index)} 
      			deleteHero={deleteHero.bind(this, entry.id)} 
      			editHero={editHero.bind(this, entry.id)} 
      			activeHero={activeHero}
      		/>
      )
    }
    </div>
}