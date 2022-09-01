import React, {useState} from 'react'
import styles from './MenuOrderTab.module.scss'
import Image from "next/image";
import Link from "next/link";
import { MenuOrderTabCard } from "../../ComponentIndex";
import {MenuOrderTabData} from "../../../data/DataIndex"
import shortid from 'shortid';


const MenuOrderTab = ({menuOnCategory, handleQuantityOnChange}) => {


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

            {menuOnCategory.orderMenu.map((item) =>{
            return(
              <div key={shortid.generate()}>
                <MenuOrderTabCard title={item.menuName} price ={item.menuPrice} quantity ={item.orderMenuQuantity} quantityOnChange={handleQuantityOnChange}/>
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

