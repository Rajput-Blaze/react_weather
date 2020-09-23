import React, { useState } from 'react';
const [inputValue, setinputValue] = useState('');
function Search() {
  //   const setvalue = (e) => {
  //     setinputValue(e.target.value);
  //   };
  return (
    <div className='searchbar form-group'>
      <input
        className='form-control'
        type='text'
        id='search'
        placeholder='city , state'
        onChange={}
        value={inputValue}
      />
          <span>enter city ,state name</span>
    </div>
  );
}

export default Search;
