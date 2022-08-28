import React from 'react'
import styles from './MenuOrderTab.module.scss'
import Image from "next/image";
import { MenuOrderTabCard } from "../../ComponentIndex";

const MenuOrderTab = () => {
  return (
        <div className={styles['MenuOrderTab']}>
          <div className={styles['txt-section']}>
          <h3> New Order </h3>
          <Image
              src="/images/delete.svg"
              alt="delete icon"
              width="20"
              height="20"
              objectFit="cover"
            />          
            </div>

          <div className={styles['img-section']}>
          {/* {menus && menus.map(menu => {
            return (
            <div>
              <div>{menu.menuName}</div>
              <div>Price: {menu.menuPrice}</div>
              <div>Servings Left: {menu.numberOfServingsLeft}</div>
              
            </div>)
          })} */}
          </div>
        </div>

  )
}

export default MenuOrderTab

