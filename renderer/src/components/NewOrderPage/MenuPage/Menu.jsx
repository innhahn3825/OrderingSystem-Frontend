import React from 'react'
import styles from './Menu.module.scss'
import Image from "next/image";
import { MenuCard } from "../../ComponentIndex";
import { MenuData } from "../../../data/DataIndex";
import shortid from 'shortid';

const Menu = ({menus}) => {
  return (
        <div className={styles['Menu']}>
          {menus && menus.map(menu => {
            return (
            <div key={shortid.generate()}>
              <div>{menu.menuName}</div>
              <div>Price: {menu.menuPrice}</div>
            </div>)
          })}
          {/* <MenuCard/> */}
          {/* <h1> hi </h1> */}
          {/* {MenuData.events.map((item) =>{
            return(
                <MenuCard Key = {item.title} Price = {item.items.price} Title = {item.items.time}/>
            )
          })} */}

        </div>

  )
}

export default Menu

