import React from 'react';
import Button from './Button';
import Input from './Input';

export default function Person ({name, id, deleteHero, editHero, saveHero, activeHero, updateActiveHero}) {
	if(activeHero === id) {
		return <div className="singleHero">
  					<div className="heroId">{id}</div>
  					<Input className='editHeroInput' type="text" placeholder={name} onChange={updateActiveHero}/>
  				<Button className="saveHeroBtn" btnVal={"Save"} onClick={saveHero}/>
  </div>
	} else {
		return <div className="singleHero">
  			<div className="heroId">{id}</div>
  			<h3>{name}</h3>
  			<Button className="editHeroBtn" btnVal={"Edit"} onClick={editHero}/>
  			<Button className="deleteHeroBtn" btnVal={"Remove"} onClick={deleteHero}/>
  			</div>
	}
}