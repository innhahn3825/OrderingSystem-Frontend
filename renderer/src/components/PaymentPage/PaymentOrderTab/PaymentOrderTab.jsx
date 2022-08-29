import React from 'react'
import styles from './PaymentOrderTab.module.scss';
import { PaymentOrderTabData } from "../../../data/DataIndex"
import { PaymentOrderTabCard } from "../../ComponentIndex"

const PaymentOrderTab = () => {
  return (
    <div className={styles['PaymentOrderTab']}>
      <div className={styles['txt-section']}>
        <p> Order #</p>
      </div>

      <div className={styles['title-section']}>
        <p> Item </p>
        <p> Qty </p>
      </div>

      <div className={styles['component-section']}>
      {PaymentOrderTabData.events.map((item) =>{
        return(
              <div key={item.title}>
                <PaymentOrderTabCard title={item.title} quantity ={item.quantity} />
              </div>
            )
      })}
      </div>

      <div className={styles['Total-Section']}>
        <div className={styles['Txt-Section']}>
          <h1> Total $15.30</h1>
        </div>
      </div>

    </div>
  )
}

export default PaymentOrderTab

