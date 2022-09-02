import React, {useState} from 'react'
import styles from './Menu.module.scss'
import { MenuCard } from "../../ComponentIndex";
import shortid from 'shortid';

const Menu = ({menus, cartOnChange}) => {

  return (
        <div className={styles['Menu']}>
          {menus && menus.map(menu => {
            return (
              <div key={shortid.generate()} onClick={()=>cartOnChange(menu)}>
                {/* {ordercart} = {1, {menu.menuName}, 1,  {menu.menuPrice}, [menu.numberOfServingsLeft], 1, false} */}
                <MenuCard name = {menu.menuName} price ={menu.menuPrice} servings ={menu.numberOfServingsLeft} />
              </div>
            )
          })}

        </div>

  )
}

export default Menu

