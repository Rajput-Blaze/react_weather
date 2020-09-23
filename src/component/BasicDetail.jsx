import React from 'react';

function BasicDetail(props) {
  
  return (
    <div>
      <div className='city_name_img'>
        <h2 id='city_name'>{props.name}</h2>
      </div>
      <div className='temp' id='temp_deg'><h1>{props.temps}°c{' '}</h1>
        
      </div>
      <div className='img_icon_text'> 
      <span id='icon_img'>
        <img src={props.iconurl} alt='img' />
        </span>
        <p id='icon_text'>{props.description}</p>
       
      </div>
    
    </div>
  );
}

export default BasicDetail;
