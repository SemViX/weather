import React from 'react'
import styles from './ForecastBlock.module.scss';

export const ForecastBlock = ({data}) => {
  return (
    <div className={styles.block}>
        <div className={styles.date}>{data?.dt_txt}</div>
        <div className={styles.image} style={{backgroundImage:`url( https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png)`}}/>
        <div className={styles.description}>{Math.trunc(data?.main.temp * 10)/10}&deg;C</div>
    </div>
  )
}
