import React from 'react'
import styles from './Sidebar.module.scss';
import { LocationIcon } from '../../Icons/LocationIcon';
import { InfoBox } from '../Infobox/Infobox';
import { ThermometerIcon } from '../../Icons/ThermometerIcon';
import { DropIcon } from '../../Icons/DropIcon';
import { WindIcon } from '../../Icons/WindIcon';
import { RainIcon } from '../../Icons/RainIcon';
import { VisibilityIcon } from '../../Icons/VisibilityIcon';
import { Transliterate } from '../../utils/common';
// 
export const Sidebar = ({weatherData, setCity, city, getData}) => {
  let word = ''
  const handleInputChange = (e) => {
    word = Transliterate(e.target.value)
    setCity(word)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    getData()
  
  }


  return (
    <div className={styles.sidebar} >
        <form className={styles.form} onSubmit={onSubmit}>
            <LocationIcon height={36} width={36}/>
            <input type="text"
              placeholder='Введіть назву міста'
              onChange={handleInputChange}
            />
            <button type="submit" hidden></button>
        </form>
        <div className={styles.currentTemp}>
          {Math.round(weatherData?.main.temp)}&deg;C  
        </div>
        <div className={styles.feelsLike}>
          Відчувається як: {Math.round(weatherData?.main.feels_like)}&deg;C 
        </div>
        <div className={styles.divider} />
        <div className={styles.info}>
          <InfoBox title='Максимальна температура' icon={<ThermometerIcon/>}>
            {Math.trunc(weatherData?.main.temp_max * 10)/10}&deg;C
          </InfoBox>
          <InfoBox title='Мінімальна температура' icon={<ThermometerIcon/>}>
            {Math.trunc(weatherData?.main.temp_max * 10)/10}&deg;C
          </InfoBox>
          <InfoBox title='Вологість повітря' icon={<DropIcon/>}>
            {weatherData?.main.humidity}%
          </InfoBox>
          <InfoBox title='Швидкість повітря' icon={<WindIcon/>}>
           { Math.trunc(weatherData?.wind.speed * 10)/10} м/c
          </InfoBox>
          <InfoBox title='Опади за 1 год.' icon={<RainIcon/>}>
            {weatherData?.rain ? weatherData.rain['1h'] : 'відсутні'} {weatherData?.rain ? 'мм.' : ''}
          </InfoBox>
          <InfoBox title='Видимість' icon={<VisibilityIcon/>}>
            {weatherData?.visibility} м
          </InfoBox>
        </div>
    </div>
  )
}
