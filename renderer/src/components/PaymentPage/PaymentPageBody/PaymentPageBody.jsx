import React from 'react'
import styles from './PaymentPageBody.module.scss';
import { PaymentCardData } from '../../../data/DataIndex';
import { PaymentPageCard } from '../../ComponentIndex'
const PaymentPageBody = () => {
  return (
    <div className={styles['PaymentPageBody']}>


      {PaymentCardData.events.map((item) =>{
        return(
              <div key={item.ordernum}>
                <PaymentPageCard ordernum={item.ordernum} quantity ={item.quantity} price ={item.price} />
              </div>
            )
      })}

    </div>
  )
}

export default PaymentPageBody


