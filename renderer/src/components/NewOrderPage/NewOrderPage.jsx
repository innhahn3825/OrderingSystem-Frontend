import React, { useState, useEffect } from 'react';

import styles from './NewOrderPage.module.scss'
import { MenuSideBar }  from "../ComponentIndex";
import Link from 'next/link';
// import  Menu  from "../ComponentIndex";
import Rest from '../../rest/Rest.tsx';
import MenuOnCategory from '../../models/MenuOnCategory.tsx';
import OrderMenu from '../../models/OrderMenu.tsx';
import MenuPage from "./MenuPage/Menu";

const INITIAL_URL = "http://localhost:8080/api/v1";

const NewOrderPage = () => {

  const rest = new Rest();

  const [activeMenuCategories, setActiveMenuCategories] = useState([]);

  const[orderCart, setOrderCart] = useState(new OrderMenu(1, "", 1, 1, "", [], 1, false));

  const[menusBasedOnCategory, setMenusBasedOnCategory] = useState([]);
  const[menuOnCategory, setMenuOnCategory] = useState(new MenuOnCategory("", []));

  

  const handleActiveMenuCategoriesLoad = (data) => {
    setActiveMenuCategories(data);
  };

  const getAllActiveMenuCategories = () => {
    rest.get(`${INITIAL_URL}/menu-category`, handleActiveMenuCategoriesLoad);
  };

  const handleMenusBasedOnCategoryLoad = (data) => {
    setMenusBasedOnCategory(data);
  }

  const getAllMenusBasedOnCategory = () => {

    rest.getMenuBasedOnCategory(
      `${INITIAL_URL}/orders/menu-on-category`,
      menuOnCategory.toJson(),
      handleMenusBasedOnCategoryLoad
    );
  };

  const handleCategoryOnChange = (newCategory) => {
    setMenuOnCategory(
      new MenuOnCategory(
        newCategory,
        menuOnCategory.orderMenu
      )
    );
  }

  useEffect(() => {
    getAllActiveMenuCategories();
  }, []);

  useEffect(() => {
    getAllMenusBasedOnCategory();
  }, [menuOnCategory]);

  useEffect(() => {
    setMenuOnCategory(
      new MenuOnCategory(
        activeMenuCategories[0],
        menuOnCategory.orderMenu
      )
    );
  }, [activeMenuCategories]);

  return (
        <div className={styles['NewOrderPage']}>
            <MenuSideBar items={activeMenuCategories} categoryOnChange={handleCategoryOnChange}/>
            <MenuPage menus={menusBasedOnCategory}/>
        </div>

  )
}

export default NewOrderPage
