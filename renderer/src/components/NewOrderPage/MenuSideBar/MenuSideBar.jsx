import React from 'react'
import styles from './MenuSideBar.module.scss'
import Image from "next/image";
import { MenuSideBarCategory } from "../../ComponentIndex";
import Link from 'next/link';

const MenuSideBar = () => {
  return (
    <div className={styles['MenuSideBar']}>
        <div className={styles['wrapper']}>
        </div>

        <div className={styles['img-section']}>
        <Image
            src="/images/logo.png" 
            alt="Escobar Logo"
            width = '80'
            height = '80'
            objectFit='contain'
        /> 
        </div>

        <div className={styles['wrapper']}>
        <MenuSideBarCategory Title = 'Meals'/>
        </div>

        <div className={styles['wrapper']}>
        <MenuSideBarCategory Title = 'Meals'/>
        </div> 
        
        <div className={styles['wrapper']}>
        <MenuSideBarCategory Title = 'Meals'/>
        </div> 

        </div>
  )
}

export default MenuSideBar

