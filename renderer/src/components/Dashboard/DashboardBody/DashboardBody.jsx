import React, { useEffect, useState } from 'react';
import styles from './DashboardBody.module.scss';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';


const DashboardBody = () => {
  const [value, setValue] = useState(new Date());
  const dateString = String(value);
  
    useEffect(() => {
      const interval = setInterval(
        () => setValue(new Date()),
          1000
      );
    
      return () => {
        clearInterval(interval);
      }
    }, []);

    return (
        <div className={styles['DashboardBody']}>
          <div className={styles['Container']}> 
            <Clock value={value} renderNumbers="true" size="350" className={styles['Clock--Container']}/>
              <div className={styles['Txt-Container']}>
                <h1> Escobar Ordering System </h1>
                {dateString}
              </div>
          </div>
        </div>
  )
}


export default DashboardBody

