import React from 'react'
import styles from './PaymentPageCard.module.scss';

const PaymentPageCard = ({ordernum, quantity, price}) => {
  return (
    <div className={styles['PaymentPageCard']}>
            <div className={styles['First-Section']}>
                <h3> Order # {ordernum} </h3>
            </div>
            <div className={styles['Second-Section']}>
                <div className={styles['Quantity-Section']}>
                    <h3> Number of Items: {quantity} </h3>
                </div>

                <div className={styles['Price-Section']}>
                    <h3> $ {price} </h3>
                    <button> Void </button>
                </div>
            </div>
        </div>
  )
}

export default PaymentPageCard

