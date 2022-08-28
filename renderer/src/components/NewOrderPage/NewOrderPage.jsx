import React from 'react'
import styles from './NewOrderPage.module.scss'
import { MenuSideBar, Menu, MenuOrderTab }  from "../ComponentIndex";
import { MenuData } from "../../data/DataIndex";

import Link from 'next/link';
// import  Menu  from "../ComponentIndex";


const NewOrderPage = () => {
  return (
        <div className={styles['NewOrderPage']}>

            <div className={styles['Component-Sidebar']}>
            <MenuSideBar/>
            </div>
            
            <div className={styles['Component-Menucard']}>
            <Menu/>
            </div>
{/* 
            <div className={styles['Component-Ordertab']}>
            <MenuOrderTab/>
            </div> */}
        </div>

  )
}

export default NewOrderPage
