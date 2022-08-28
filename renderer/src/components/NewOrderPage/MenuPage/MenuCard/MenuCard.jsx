import React from 'react'
import styles from './MenuCard.module.scss'
import Image from "next/image";

const MenuCard = ({name, price, servings}) => {
  return (
        <div className={styles['MenuCard']}>
                {/* <div className={[styles["SidebarCategory"], isActive && styles["Selected"]].join(" ")}> */}


              {/* <div>{menu.menuName}</div>
              <div>Price: {menu.menuPrice}</div>
              <div>Servings Left: {menu.numberOfServingsLeft}</div> */}

                <div className={styles['wrapper']}>
                    <h4> Title: {name}</h4>
                    <p> Price: {price}  </p>
                    <p>Servings Left: {servings} </p>
            </div>
        </div> 

  )
}

export default MenuCard

