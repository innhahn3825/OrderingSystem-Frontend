import React from 'react'
import styles from './Sidebar.module.scss'
import Image from "next/image";
import { SidebarCategory } from "../ComponentIndex";
import Link from 'next/link';

const Sidebar= () => {
  return (


      <div className={styles['sidenav']}>
        <Link href = "/neworder"><SidebarCategory Title = 'New Order'/></Link>
        <Link href = "/dashboard"><SidebarCategory Title = 'Dashboard'/></Link>
        <Link href = "/home"><SidebarCategory Title = 'Logout' /></Link>


      </div>
  )
}

export default Sidebar

