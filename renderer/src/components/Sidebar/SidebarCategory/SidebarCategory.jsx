import React from 'react'
import styles from './SidebarCategory.module.scss'
import Image from "next/image";


const SidebarCategory = ({Title}) => {
  return (
    <div className={styles['SidebarCategory']}>
      {/* <Image
          src={Picture}
          alt="Escobar Logo"
          width = '100'
          height = '100'
      /> */}
      <p> {Title} </p>
    </div>
  )
}

export default SidebarCategory

