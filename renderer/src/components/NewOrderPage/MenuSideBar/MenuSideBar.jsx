import React from 'react'
import styles from './MenuSideBar.module.scss'
import Image from "next/image";
import { MenuSideBarCategory } from "../../ComponentIndex";
// import { MenuData } from "../../../data/DataIndex";
import Link from 'next/link';


const MenuSideBar = ({items, categoryOnChange}) => {
  return (
    <div className={styles['MenuSideBar']}>
      <Link href = "/dashboard"> 
        <div className={styles['back-section']} >
        <Image
            src="/images/arrow-left.svg" 
            alt="Escobar Logo"
            width = '24'
            height = '24'
            objectFit='contain'
        /> 
        <p> Back </p>
        </div>
        </Link>
        <div className={styles['img-section']}>
        <Image
            src="/images/logo.png" 
            alt="Escobar Logo"
            width = '80'
            height = '80'
            objectFit='contain'
        /> 
        </div>

        {items.map((item) =>{
            return(
              <div key={item} className={styles['wrapper']} onClick={()=>categoryOnChange(item)}>
                <MenuSideBarCategory Title={item}/>
              </div>
            )
          })}

        </div>
        

     
  )
}

export default MenuSideBar

