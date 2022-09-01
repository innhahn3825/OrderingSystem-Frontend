import React, { useState, useEffect } from 'react';

import styles from './NewOrderPage.module.scss'
import { MenuSideBar, Menu, MenuOrderTab }  from "../ComponentIndex";
// import { MenuData } from "../../data/DataIndex";

import Rest from '../../rest/Rest.tsx';
import MenuOnCategory from '../../models/MenuOnCategory.tsx';
import OrderMenu from '../../models/OrderMenu.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

const NewOrderPage = () => {

  const rest = new Rest();

  const [activeMenuCategories, setActiveMenuCategories] = useState([]);

  const [currentMenuCategory, setCurrentMenuCategory] = useState();

  const[orderCart, setOrderCart] = useState(new OrderMenu(1, "", 1, 1, "", [], 1, false));

  const[menusBasedOnCategory, setMenusBasedOnCategory] = useState([]);
  const[menuOnCategory, setMenuOnCategory] = useState(new MenuOnCategory("", []));

  const handleCartChange = (newMenu) => {
    newMenu.orderMenuQuantity = 1;
    const isNewMenuExisting = false;
    const newMenuOnCategory = menuOnCategory.orderMenu.map((currentMenu)=> {
      if (currentMenu.menuName === newMenu.menuName){
        currentMenu.orderMenuQuantity += 1;
        isNewMenuExisting = true;
      }

      return currentMenu;
    
    });
    
    if (!isNewMenuExisting){
      newMenuOnCategory.push(newMenu);
    }

    setMenuOnCategory(
      new MenuOnCategory(
        menuOnCategory.menuCategoryName,
        newMenuOnCategory
      )
    );
  };

  const handleQuantityOnChange = (name, quantityToAdd) => {

    const newMenuOnCategory = menuOnCategory.orderMenu.map((currentMenu)=> {
      if (currentMenu.menuName === name){
        currentMenu.orderMenuQuantity += quantityToAdd;
      }
      return currentMenu;
    });
    setMenuOnCategory(new MenuOnCategory(
      menuOnCategory.menuCategoryName,
      newMenuOnCategory
    ));
  }

  const handleActiveMenuCategoriesLoad = (data) => {
    setActiveMenuCategories(data);
    setCurrentMenuCategory(data[0]);
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
    setCurrentMenuCategory(newCategory);
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
    console.log(menuOnCategory);
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
    <div className={styles["NewOrderPage"]}>
      <MenuSideBar
        items={activeMenuCategories}
        categoryOnChange={handleCategoryOnChange}
        currentMenuCategory={currentMenuCategory}
      />

      <div className={styles["Component"]}>
        <Menu menus={menusBasedOnCategory} cartOnChange={handleCartChange} />
        <MenuOrderTab
          menuOnCategory={menuOnCategory}
          handleQuantityOnChange={handleQuantityOnChange}
        />
      </div>

      {/* <div className={styles['Component-Ordertab']}>
              <MenuOrderTab/>
            </div> */}
    </div>
  );
}

export default NewOrderPage;
