import React from 'react'
import styles from './SidebarCategory.module.scss'
import Image from "next/image";


const SidebarCategory = ({Title}) => {
  return (
    <div className={styles['SidebarCategory']}>
      <p> {Title} </p>
    </div>
  )
}

export default SidebarCategory

