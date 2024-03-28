import React from 'react';
import Button from './Button';

const Card = ({cardtitle,titlecolor, param, bgcolor}) => {
  
  return (
    <div className={` p-3 ${bgcolor} rounded-xl md:max-w-[65%]`} >
      <h2 className={` ${titlecolor} font-bold text-xl mb-2`} >{cardtitle}</h2>
        <p>{param}</p>
       <div className='mt-3'>
       </div>
    </div>
  )
}

export default Card