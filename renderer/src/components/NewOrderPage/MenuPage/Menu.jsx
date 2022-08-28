import React from 'react'
import styles from './Menu.module.scss'
import Image from "next/image";
import { MenuCard } from "../../ComponentIndex";
import { MenuData } from "../../../data/DataIndex";

const Menu = ({menus}) => {
  return (
        <div className={styles['Menu']}>
          {menus && menus.map(menu => {
            return (
              <div>
                <MenuCard name = {menu.menuName} price ={menu.menuPrice} servings ={menu.numberOfServingsLeft} />
              </div>
            )
          })}

        </div>

  )
}

export default Menu

