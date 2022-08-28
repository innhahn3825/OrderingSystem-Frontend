import React from 'react'
import styles from './Dashboard.module.scss'
import Image from "next/image";
import { Sidebar, DashboardBody } from "../ComponentIndex";
import Link from 'next/link';

const Dashboard= () => {
  return (
        <div className={styles['Dashboard']}>

          <div className={styles['Component']}>
              <Sidebar/>
          </div>
          
          <div className={styles['Component']}>
            <DashboardBody/>
          </div>


        </div>

  )
}

export default Dashboard

