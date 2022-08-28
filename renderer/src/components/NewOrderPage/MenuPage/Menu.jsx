import React from 'react'
import styles from './Menu.module.scss'
import Image from "next/image";
import { MenuCard } from "../../ComponentIndex";

const Menu = ({menus}) => {
  return (
        <div className={styles['Menu']}>
          {menus && menus.map(menu => {
            return (
            <div>
              <div>{menu.menuName}</div>
              <div>Price: {menu.menuPrice}</div>
            </div>)
          })}
          {/* <MenuCard/> */}
        </div>

  )
}

export default Menu

