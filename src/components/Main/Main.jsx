import React, { useState } from 'react'
import axios from 'axios'
import styles from './Main.module.scss'
import { BACKGROUND } from '../../utils/constants'
import { Sidebar } from '../Sidebar/Sidebar'
import { Forecast } from '../Forecast/Forecast'

export const Main = () => {
    const [city, setCity] = useState('London')
    const [weather, setWeather] = useState(null)
    const [forecastWether, setForecastWether] = useState('London')
    
    const getCurrentWeatherData = async () => {
        try{
            const weather = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f87a52076feedcd7bfbc8222a44655c1&lang=ua&units=metric`)
            setWeather(weather.data)
            const forecastWether = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f87a52076feedcd7bfbc8222a44655c1&lang=ua&units=metric`)
            setForecastWether(forecastWether.data)
        }
        catch (err){
            console.log(err);
        }
    }
    useState(() => {
        getCurrentWeatherData()
    }, [])



  return (
    
    <div className={styles.main} style={{backgroundImage: `url(${BACKGROUND[weather?.weather[0].icon]})`}}>
        <div className={styles.info}>
            <div className={styles.mainInfo}>
                <div className={styles.content}>
                    <div className={styles.image}>
                        <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
                    </div>
                    <div className={styles.description}>{weather?.weather[0].description}</div>
                </div>
            </div>
            <Forecast wetherData={forecastWether}/>
        </div>
        <Sidebar weatherData={weather} setCity={setCity} city={city} getData={getCurrentWeatherData}/>
    </div>
  )
}
