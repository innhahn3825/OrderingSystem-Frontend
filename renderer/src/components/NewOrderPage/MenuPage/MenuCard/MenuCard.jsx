import React from 'react'
import styles from './MenuCard.module.scss'
import Image from "next/image";

const MenuCard = (Price, Title) => {
  return (
        <div className={styles['MenuCard']}>
            {/* <MenuSideBar/> */}
            {/* <div className={styles['Img-Section']}>
            <Image
                src={Picture}
                alt="Escobar Logo"
                width = '30'
                height = '30'
                draggable="false"
            /> 
            </div> */}

            <div className={styles['Text-Section']}>
                <p> {Price} </p>
            </div>

            <div className={styles['Text-Section']}>
                <p> {Title} </p>
            </div>

        </div>

  )
}

export default MenuCard

