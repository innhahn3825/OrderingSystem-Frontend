import React, {useState} from 'react'
import styles from './Menu.module.scss'
// import OrderMenu from '../../models/OrderMenu.tsx';
import { MenuCard } from "../../ComponentIndex";

const Menu = ({menus}) => {
  // const[orderCart, setOrderCart] = useState(new OrderMenu(1, "", 1, 1, "", [], 1, false));
  
  // const getAllOrderMenuItems = () => {

  //   rest.getMenuBasedOnCategory(
  //     `${INITIAL_URL}/orders/menu-on-category`,
  //     menuOnCategory.toJson(),
  //     handleMenusBasedOnCategoryLoad
  //   );

  // };


  return (
        <div className={styles['Menu']}>
          {menus && menus.map(menu => {
            return (
              <div>
                {/* {ordercart} = {1, {menu.menuName}, 1,  {menu.menuPrice}, [menu.numberOfServingsLeft], 1, false} */}
                <MenuCard name = {menu.menuName} price ={menu.menuPrice} servings ={menu.numberOfServingsLeft} />
              </div>
            )
          })}

        </div>

  )
}

export default Menu

