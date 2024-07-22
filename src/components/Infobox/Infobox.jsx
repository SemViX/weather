import React from 'react'
import styles from './Infobox.module.scss'

export const InfoBox = ({title, children, icon}) => {
  return (
    <div className={styles.box}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.content}>
            <div className={styles.info}>{children}</div>
            <div className={styles.icon}>{icon}</div>
        </div>
    </div>
    
  )
}
