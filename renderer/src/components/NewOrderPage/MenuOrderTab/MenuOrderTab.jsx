import React, {useState} from 'react'
import styles from './MenuOrderTab.module.scss'
import Image from "next/image";
import Link from "next/link";
import { MenuOrderTabCard } from "../../ComponentIndex";
// import {MenuOrderTabData} from "../../../data/DataIndex"
// import MenuOnCategory from '../../models/MenuOnCategory.tsx';
// import OrderMenu from '../../models/OrderMenu.tsx';

// import Rest from '../../rest/Rest.tsx';

const MenuOrderTab = () => {

    // const rest = new Rest();
    
    // const[orderCart, setOrderCart] = useState(new OrderMenu(1, "", 1, 1, "", [], 1, false));
  
    // const handleMenusBasedOnCategoryLoad = (data) => {
    //   setMenusBasedOnCategory(data);
    // }
  
    // const getAllMenusBasedOnCategory = () => {
  
    //   rest.getMenuBasedOnCategory(
    //     `${INITIAL_URL}/orders/menu-on-category`,
    //     menuOnCategory.toJson(),
    //     handleMenusBasedOnCategoryLoad
    //   );
    // };
  
    // useEffect(() => {
    //   getAllActiveMenuCategories();
    // }, []);
  
    // useEffect(() => {
    //   setMenuOnCategory(
    //     new MenuOnCategory(
    //       activeMenuCategories[0],
    //       menuOnCategory.orderMenu
    //     )
    //   );
    // }, [activeMenuCategories]);

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

            {/* {MenuOrderTabData.events.map((item) =>{
            return(
              <div key={item.title}>
                <MenuOrderTabCard title={item.title} price ={item.price} quantity ={item.quantity}/>
              </div>
            )
          })} */}

          {}
            
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

