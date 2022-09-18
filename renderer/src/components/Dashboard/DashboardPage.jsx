import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.scss'
import Image from "next/image";
import { Sidebar, DashboardBody } from "../ComponentIndex";
import Link from 'next/link';
import Toast from "../Toast/Toast";
import { toast } from "react-toastify";
import Rest from '../../rest/Rest.tsx';

const INITIAL_URL = process.env.NEXT_PUBLIC_INITIAL_URL;

const DashboardPage = () => {

  const rest = new Rest();

  const [unavailableMenu, setUnavailableMenu] = useState([])

  const handleUnavialableMenuOnLoad = (data) =>{
    setUnavailableMenu(data);
  }

  useEffect(() =>{
    rest.get(
      `${INITIAL_URL}/menu/unavailable`, handleUnavialableMenuOnLoad
    );
  },[])

  return (
        <div className={styles['Dashboard']}>
          <Toast />
          <div className={styles['Component']}>
              <Sidebar page = "dashboard"/>
          </div>

          <div className={styles['Component']}>
            <DashboardBody unavailableMenu={unavailableMenu}/>
          </div>


        </div>

  )
}

export default DashboardPage

