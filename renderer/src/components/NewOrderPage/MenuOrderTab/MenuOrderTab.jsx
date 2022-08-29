import React from 'react'
import styles from './MenuOrderTab.module.scss'
import Image from "next/image";
// import { useState } from React;
import Link from "next/link";
import { MenuOrderTabCard } from "../../ComponentIndex";
import {MenuOrderTabData} from "../../../data/DataIndex"
const MenuOrderTab = () => {
  return (
        <div className={styles['MenuOrderTab']}>
          <div className={styles['txt-section']}>
          <h3> New Order </h3>
          <button>
          <Image
              src="/images/delete.svg"
              alt="delete icon"
              width="20"
              height="20"
              objectFit="cover"
            />  
          </button>        
            </div>

          <div className={styles['container-section']}>
          {/* {menus && menus.map(menu => {
            return (
            <div>
              
              <div>{menu.menuName}</div>
              <div>Price: {menu.menuPrice}</div>
              <div>Servings Left: {menu.numberOfServingsLeft}</div>
              
            </div>)
          })} */}
            {MenuOrderTabData.events.map((item) =>{
            return(
              <div key={item.title}>
                <MenuOrderTabCard title={item.title} price ={item.price} quantity ={item.quantity}/>
              </div>
            )
          })}
            
          </div>

          <div className={styles['total-section']}>
            <h1> $16.25 </h1>
            
            <Link href = "/payment">
            <div className={styles['pay-section']}>
            <h2> Pay </h2>
            <Image
              src="/images/chevron.svg"
              alt="delete icon"
              width="20"
              height="20"
              objectFit="cover"
            />          
            </div>
            </Link>
          </div>

        </div>

  )
}

export default MenuOrderTab

