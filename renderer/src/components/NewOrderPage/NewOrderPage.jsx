import React from 'react'
import styles from './NewOrderPage.module.scss'
import { MenuSideBar }  from "../ComponentIndex";
import Link from 'next/link';
// import  Menu  from "../ComponentIndex";


const NewOrderPage = () => {
  return (
        <div className={styles['NewOrderPage']}>
            <MenuSideBar/>
        </div>

  )
}

export default NewOrderPage
