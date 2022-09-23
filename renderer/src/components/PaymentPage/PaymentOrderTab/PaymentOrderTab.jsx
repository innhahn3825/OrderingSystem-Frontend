import React from 'react'
import styles from './PaymentOrderTab.module.scss';
import { PaymentOrderTabData } from "../../../data/DataIndex"
import { PaymentOrderTabCard } from "../../ComponentIndex";
import shortid from 'shortid';

const PaymentOrderTab = ({orderTabItems, orderCardSelected, orderDiscount}) => {

  const total = orderTabItems.reduce(
    (sum, currentMenu) =>
      sum + currentMenu.foodOrder.menu.menuPrice * currentMenu.foodOrder.menuQuantity,
    0
  );

    console.log(orderCardSelected);
  return (
    <div className={styles["PaymentOrderTab"]}>
      <div className={styles["txt-section"]}></div>

      <div className={styles["title-section"]}>
        <p> Order # {orderCardSelected} </p>
        <p className={styles["Quantity"]}> Qty </p>
      </div>

      <div className={styles["component-section"]}>
        {orderTabItems.map((item) => {
          return (
            <div key={shortid.generate()}>
              <PaymentOrderTabCard
                title={item.foodOrder.menu.menuName}
                quantity={item.foodOrder.menuQuantity}
              />
            </div>
          );
        })}
      </div>

      <h3> {`Discount: ${orderDiscount}%`}</h3>
      <div className={styles["Total-Section"]}>
        <div className={styles["Txt-Section"]}>
          <h1> {`Total $${total}`}</h1>
        </div>
      </div>
    </div>
  );
}

export default PaymentOrderTab

