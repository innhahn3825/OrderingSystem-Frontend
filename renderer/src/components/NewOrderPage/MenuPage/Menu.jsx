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
            
            <div className={styles['container']}>
              <div className={styles['wrapper']}>
                  <h4> Title: {menu.menuName}</h4>
                  <p> Price: {menu.menuPrice}  </p>
                  <p>Servings Left: {menu.numberOfServingsLeft} </p>
              </div> 
              {/* <MenuCard name = {menu.menuName} price = {menu.menuPrice} servings = {menu.numberOfServingsLeft}/> */}
            </div>
            )
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

