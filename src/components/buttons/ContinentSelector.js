import React from 'react';
import BackArrow from  '../../images/icons/menuThings/BackArrow.png'
import FrontArrow from  '../../images/icons/menuThings/FrontArrow.png'

function ContinentSelector(){
return(<div className='continentSelector'>
    <img src={BackArrow}/>
    <span id='mainContinent'>Continent1</span>-<span id='secondaryContinent'>Continent2</span>
    <img src={FrontArrow}/>
</div>




)}

export default ContinentSelector


