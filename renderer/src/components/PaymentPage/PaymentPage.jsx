import React from 'react'
import styles from './PaymentPage.module.scss';
import { Sidebar, PaymentPageBody, PaymentOrderTab } from "../ComponentIndex";

const PaymentPage = () => {
  return (
    <div className={styles['PaymentPage']}>
        <Sidebar page = "paymentpage"/>
          <div className={styles['Component']}>
            <PaymentPageBody/>
            <PaymentOrderTab/>
          </div>
    </div>
  )
}

export default PaymentPage

