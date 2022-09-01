import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.scss'
import Image from "next/image";
import { Sidebar, DashboardBody } from "../ComponentIndex";
import Link from 'next/link';
import Toast from "../Toast/Toast";
import { toast } from "react-toastify";

const Dashboard= () => {

  useEffect(() =>{
    // toast.success("Successfully Logged In`");
  },[])

  return (
        <div className={styles['Dashboard']}>
          <Toast />
          <div className={styles['Component']}>
              <Sidebar page = "dashboard"/>
          </div>

          <div className={styles['Component']}>
            <DashboardBody/>
          </div>


        </div>

  )
}

export default Dashboard

