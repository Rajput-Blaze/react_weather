import React, { useState} from 'react';

import BasicDetail from './component/BasicDetail';
const api = {
  key: '744c06e983d02d3a9df8b2445c83f99f',
  base: 'http://api.openweathermap.org/data/2.5/',
 
};
function App() {
  const [inputValue, setinputValue] = useState('');
  const [weather, setweather] = useState({});
  const keyPress = (e) => {
    if (e.keyCode === 13) {
      const quey = e.target.value;

      fetch(`${api.base}weather?q=${quey}&units=metric&APPID=${api.key}`)
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            throw Error(response.statusText);
          }
        })
        .then((result) => {
          setweather(result);
          setinputValue('');
          // console.log(result);
        })
        .catch((error) => alert(error));
    }
  };
  return (
    <div className='main_outer'>
      <div className='main'>
        <div className='container'>
        <div className='searchbar form-group'>
          <input
            className='form-control'
            type='text'
            id='search'
            placeholder='City, State'
            onChange={(e) => setinputValue(e.target.value)}
            value={inputValue}
            onKeyDown={keyPress}
          />
        </div>
        <div className='result'>
        {typeof weather.main != 'undefined' ? (
          <BasicDetail
            name={weather.name}
            temps={Math.round(weather.main.temp)}
            description={weather.weather[0].description}
            iconurl ={ `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            datetime = {new Date(weather.dt * 1000)}
          />
        ) : (
          ''
        )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
