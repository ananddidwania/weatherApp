import React, { useState } from 'react';
import getWeatherData from './api';
import './App.css'

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [weather, setWeather] = useState('');

    const search = async(e) => {
        if(e.key === 'Enter'){
            const data = await getWeatherData(searchTerm);
            setWeather(data);
            setSearchTerm('');
        }
    }

    return (
        <div className='main-container'>
            <input
                placeholder="search here..."
                className='search'
                type='text'
                onKeyPress={search}
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
            />
                {weather.main && (
                    <div className='city'>
                        <h2 className='city-name'>
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>
                        <div className='city-temp'>
                            {weather.main.temp}
                            <sup>&deg;C</sup>
                        </div>
                        <div className='info'>
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default App;