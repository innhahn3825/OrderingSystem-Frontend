import React from 'react'
import styles from './PaymentPage.module.scss';
import { Sidebar, PaymentPageBody } from "../ComponentIndex";

const PaymentPage = () => {
  return (
    <div className={styles['PaymentPage']}>
        <Sidebar/>
        <PaymentPageBody/>
    </div>
  )
}

export default PaymentPage

