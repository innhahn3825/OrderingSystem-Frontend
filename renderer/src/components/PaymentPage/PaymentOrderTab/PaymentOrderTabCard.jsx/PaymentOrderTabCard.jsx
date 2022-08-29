import React from 'react'
import styles from './PaymentOrderTabCard.module.scss';

const PaymentOrderTabCard = ({title, quantity}) => {
  return (
    <div className={styles['PaymentOrderTabCard']}>
        <h2> {title} </h2>
        <h2> {quantity} </h2>


    </div>
  )
}

export default PaymentOrderTabCard

