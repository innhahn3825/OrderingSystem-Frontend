import React from 'react'
import styles from './NewOrderPage.module.scss'
import Image from "next/image";
import { Sidebar } from "../ComponentIndex";

const Dashboard= () => {
  return (
        <div className={styles['Dashboard']}>
            <Sidebar/>
            <h1> hello </h1>
        </div>

  )
}

export default Dashboard

