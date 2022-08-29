import React from 'react'
import styles from './MenuCard.module.scss'
import Image from "next/image";

const MenuCard = ({name, price, servings}) => {
  return (
        <div className={styles['MenuCard']}>
                {/* <div className={[styles["SidebarCategory"], isActive && styles["Selected"]].join(" ")}> */}
                <div className={styles['wrapper']}>
                    <p> ${price}  </p>
                    <h1> {name}</h1>
                    <p>Servings Left: {servings} </p>
            </div>
        </div> 

  )
}

export default MenuCard

