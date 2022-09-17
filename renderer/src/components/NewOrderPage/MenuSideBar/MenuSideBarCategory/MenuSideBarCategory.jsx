import React from 'react'
import styles from './MenuSideBarCategory.module.scss'
import Image from "next/image";
import Link from 'next/link';
import { MenuData } from "../../../../data/DataIndex";


const MenuSideBarCategory = ({Title, isSelected}) => {
  return (
        <div className={[styles['MenuSideBarCategory'], isSelected && styles["MenuSideBarCategory--selected"]].join(" ")}>
            <p> {Title} </p>
        </div>
  )
}

export default MenuSideBarCategory


