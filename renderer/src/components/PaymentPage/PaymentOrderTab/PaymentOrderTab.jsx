import React, {useState, useEffect} from 'react'
import styles from './PaymentOrderTab.module.scss';
import { PaymentOrderTabData } from "../../../data/DataIndex"
import { PaymentOrderTabCard } from "../../ComponentIndex";
import shortid from 'shortid';

const PaymentOrderTab = ({orderTabItems}) => {
  console.log(orderTabItems)
  const [id, setMenuId] = useState(1);

  const total = orderTabItems.reduce(
    (sum, currentMenu) =>
      sum + currentMenu.foodOrder.menu.menuPrice * currentMenu.foodOrder.menuQuantity,
    0
  );

  useEffect(() => {
    setMenuId(
      orderTabItems.reduce(
        (id, currentMenu) =>
         id + currentMenu.foodOrder.menu.menuId,
        0
      )
      
    );
  }, [orderTabItems]);

  return (
    <div className={styles['PaymentOrderTab']}>
      <div className={styles['txt-section']}>
        <p> Order # {id}</p>
      </div>

      <div className={styles['title-section']}>
        <p> Item </p>
        <p> Qty </p>
      </div>

      <div className={styles['component-section']}>
      {orderTabItems.map((item) =>{
        return(
              <div key={shortid.generate()}>
                <PaymentOrderTabCard title={item.foodOrder.menu.menuName} quantity ={item.foodOrder.menuQuantity} />
              </div>
            )
      })}
      </div>

      <div className={styles['Total-Section']}>
        <div className={styles['Txt-Section']}>
          <h1> {`Total $${total}`}</h1>
        </div>
      </div>

    </div>
  )
}

export default PaymentOrderTab

