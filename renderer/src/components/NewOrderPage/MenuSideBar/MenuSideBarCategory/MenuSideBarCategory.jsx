import React from 'react'
import styles from './MenuSideBarCategory.module.scss'
import Image from "next/image";
import Link from 'next/link';
import { MenuData } from "../../../../data/DataIndex";


const MenuSideBarCategory = ({Title}) => {
  return (
        <div className={styles['MenuSideBarCategory']}>
            <p> {Title} </p>
        </div>

  )
}

export default MenuSideBarCategory


