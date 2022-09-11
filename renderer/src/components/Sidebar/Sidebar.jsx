import React from 'react'
import styles from './Sidebar.module.scss'
import Image from "next/image";
import { SidebarCategory } from "../ComponentIndex";
import Link from 'next/link';

const Sidebar= ({page}) => {
  return (
      <div className={styles['sidenav']}>
        <div className={styles['wrapper']}>
        </div>

        <div className={styles['img-section']}>
        <Image
            src="/images/logo.png" 
            alt="Escobar Logo"
            width = '85'
            height = '85'
            objectFit='contain'
            draggable = 'false'
        /> 
        </div>

        <Link href="/neworder">
        <div className={styles['wrapper']}>
        <SidebarCategory Title = 'New Order'/>
        </div>
        </Link>

        <Link href="/dashboard">
        <div className={styles['wrapper']}>
        <SidebarCategory isActive = {page==="dashboard"} Title = 'Dashboard'/>
        </div>
        </Link>

        <Link href="/payment">
        <div className={styles['wrapper']}>
        <SidebarCategory isActive = {page==="paymentpage"} Title = 'Payout'/>
        </div>
        </Link>

        <Link href="/home">
        <div className={styles['wrapper']}>
        <SidebarCategory Title = 'Logout'/>
        </div>
        </Link>

        </div>
  )
}

export default Sidebar

