import React from 'react'
import styles from './PaymentOrderTabCard.module.scss';

const PaymentOrderTabCard = ({title, quantity}) => {
  return (
    <div className={styles['PaymentOrderTabCard']}>
        <h2 className={styles['Title']}> {title} </h2>
        <h2 className={styles['Price']}>  {quantity} </h2>
    </div>
  )
}

export default PaymentOrderTabCard

