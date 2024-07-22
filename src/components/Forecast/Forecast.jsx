import React from 'react';
import styles from './Forecast.module.scss'
import { ForecastBlock } from '../ForecastBlock/ForecastBlock';

export const Forecast = ({wetherData}) => {
    let data = wetherData?.list?.slice(0, 14);
  return (
    <div className={styles.forecast}>
        {data? data.map((dt) => { return <ForecastBlock data={dt}/>}) : ''}
    </div>
  )
}
