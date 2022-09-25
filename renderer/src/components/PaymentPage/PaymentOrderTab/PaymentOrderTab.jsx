import React from 'react'
import styles from './PaymentOrderTab.module.scss';
import { PaymentOrderTabData } from "../../../data/DataIndex"
import { PaymentOrderTabCard } from "../../ComponentIndex";
import shortid from 'shortid';

const PaymentOrderTab = ({orderTabItems, orderCardSelected, orderDiscount, customerPayment}) => {

  const total = orderTabItems.reduce(
    (sum, currentMenu) =>
      sum + currentMenu.foodOrder.menu.menuPrice * currentMenu.foodOrder.menuQuantity,
    0
  );

    console.log(orderCardSelected);
  return (
    <div className={styles["PaymentOrderTab"]}>
      <div className={styles["orderno-section"]}></div>
      <p> Order # {orderCardSelected} </p>

      <div className={styles["title-section"]}>
        <p className={styles["Quantity"]}> Item Title </p>
        <p className={styles["Quantity"]}> Quantity </p>
        <p className={styles["Quantity"]}> Price </p>
      </div>

      <div className={styles["component-section"]}>
        {orderTabItems.map((item) => {
          return (
            <div key={shortid.generate()}>
              <PaymentOrderTabCard
                title={item.foodOrder.menu.menuName}
                quantity={item.foodOrder.menuQuantity}
                price={item.foodOrder.menu.menuPrice}
              />
            </div>
          );
        })}
      </div>

        <div className={styles['CustomerPayment-Section']}>
          <h2 className={styles['CustomerPayment']}> Customer Payment </h2>
          <h2  className={styles['CustomerPaymentPrice']}> {customerPayment}  </h2>
        </div>

        <div className={styles['Subtotal-Section']}>
          <h2 className={styles['Subtotal']}> SubTotal </h2>
          <h2  className={styles['SubtotalPrice']}> {total}  </h2>
        </div>

        <div className={styles['Discounted-Section']}>
          <h2 className={styles['Discount']}> Discounted Price </h2>
          <h2  className={styles['DiscountPrice']}> {total * (orderDiscount/100)}  </h2>
        </div>

        <div className={styles['Total-Section']}>
          <h2 className={styles['Total']}> Total </h2>
          <h2  className={styles['TotalPrice']}> {total - (total * (orderDiscount/100))}  </h2>
        </div>

        <div className={styles['Change-Section']}>
          <h2 className={styles['Change']}> Change </h2>
          <h2  className={styles['ChangePrice']}> {customerPayment - (total - orderDiscount)}  </h2>
        </div>

      <div className={styles["Total-Section"]}>
        <div className={styles["Txt-Section"]}>
          <h1> {`Total $${total}`}</h1>
          <h1> {`Total ${customerPayment}`}</h1>

        </div>
      </div>
    </div>
  );
}

export default PaymentOrderTab

