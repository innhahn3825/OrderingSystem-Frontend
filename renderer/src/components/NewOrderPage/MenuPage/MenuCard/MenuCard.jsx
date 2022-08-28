import React from 'react'
import styles from './MenuCard.module.scss'
import Image from "next/image";

const MenuCard = (name, price, servings) => {
  return (
        <div className={styles['MenuCard']}>
                {/* <div className={[styles["SidebarCategory"], isActive && styles["Selected"]].join(" ")}> */}


              {/* <div>{menu.menuName}</div>
              <div>Price: {menu.menuPrice}</div>
              <div>Servings Left: {menu.numberOfServingsLeft}</div> */}

            <div className={styles['Text-Section']}>
                <h4> Title: {name} </h4>
            </div>

            <div className={styles['Text-Section']}>
                <p> Price: {price} </p>
            </div>

            <div className={styles['Text-Section']}>
                <p>Servings Left: {servings} </p>
            </div> 
        </div> 

  )
}

export default MenuCard

