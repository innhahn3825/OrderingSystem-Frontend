import React, { useState, useEffect } from 'react';
import styles from './MenuSideBar.module.scss'
import Image from "next/image";
import { MenuSideBarCategory } from "../../ComponentIndex";
// import { MenuData } from "../../../data/DataIndex";
import Link from 'next/link';



const MenuSideBar = ({items, categoryOnChange, currentMenuCategory}) => {

  return (
    <div className={styles['MenuSideBar']}>
        <div className={styles['back-section']} >
        <Link href = "/dashboard"> 
        <button>
        <Image
            src="/images/arrow-left.svg" 
            alt="Escobar Logo"
            width = '24'
            height = '24'
            objectFit='contain'
            draggable = 'false'
        /> 
        </button>
        </Link>
        <p> Back </p>
        </div>
        <div className={styles['img-section']}>
        <Image
            src="/images/logo.png" 
            alt="Escobar Logo"
            width = '85'
            height = '85'
            objectFit='contain'
            draggable = 'false'
        /> 
        </div>

        {items.map((item) =>{
            return(
              <div key={item} className={styles['wrapper']} onClick={()=>categoryOnChange(item)}>
                <MenuSideBarCategory Title={item} isSelected={item === currentMenuCategory}/>
              </div>
            )
          })}
      </div>        

     
  )
}

export default MenuSideBar

