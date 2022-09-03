import React from 'react'
import styles from './MenuCard.module.scss'
import Image from "next/image";
// import OrderMenu from '../../models/OrderMenu.tsx';


const MenuCard = ({name, price, servings}) => {

  // const[orderCart, setOrderCart] = useState(new OrderMenu(1, "", 1, 1, "", [], 1, false));

  return (
        <div className={styles['MenuCard']} >
                <div className={[styles["wrapper"], servings===0 && styles["wrapper--selected"]].join(" ")}>
                    <p> $ {price}  </p>
                    <h1> {name}</h1>
                    <p className={[styles["servings"], servings===0 && styles["servings--selected"]].join(" ")}>Servings Left: {servings} </p>
            </div>
        </div> 

  )
}

export default MenuCard

