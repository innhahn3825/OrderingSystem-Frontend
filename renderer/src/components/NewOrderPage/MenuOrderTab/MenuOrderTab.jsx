import React, {useState, useEffect} from 'react'
import styles from './MenuOrderTab.module.scss'
import Image from "next/image";
import Link from "next/link";
import { MenuOrderTabCard } from "../../ComponentIndex";
import {MenuOrderTabData} from "../../../data/DataIndex"
import shortid from 'shortid';


const MenuOrderTab = ({
  menuOnCategory,
  handleQuantityOnChange,
  handleDeleteItemButtonOnClick,
  deleteAllItemOnClick,
  payButtonOnClick
}) => {
  const [total, setTotal] = useState(1);

  useEffect(() => {
    setTotal(
      menuOnCategory.orderMenu.reduce(
        (sum, currentMenu) =>
          sum + currentMenu.menuPrice * currentMenu.orderMenuQuantity,
        0
      )
    );
  }, [menuOnCategory]);

  return (
    <div className={styles["MenuOrderTab"]}>
      <div className={styles["txt-section"]}>
        <h3> New Order </h3>
        <button onClick={deleteAllItemOnClick}>
          <Image
            src="/images/delete.svg"
            alt="delete icon"
            width="20"
            height="20"
            objectFit="cover"
          />
        </button>
      </div>

      <div className={styles["container"]}>
        {menuOnCategory.orderMenu.map((item) => {
          return (
            <div
              className={styles["container-section"]}
              key={shortid.generate()}
            >
              <MenuOrderTabCard
                title={item.menuName}
                price={item.menuPrice}
                quantity={item.orderMenuQuantity}
                quantityOnChange={handleQuantityOnChange}
                handleDeleteItemButtonOnClick={handleDeleteItemButtonOnClick}
              />
            </div>
          );
        })}
      </div>

      <div className={styles["total-section"]} onClick={payButtonOnClick}>
        <h1>$ {total}</h1>
        <div className={styles["pay-section"]}>
          <h2> Pay </h2>
          <Image
            src="/images/chevron.svg"
            alt="delete icon"
            width="20"
            height="20"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuOrderTab

