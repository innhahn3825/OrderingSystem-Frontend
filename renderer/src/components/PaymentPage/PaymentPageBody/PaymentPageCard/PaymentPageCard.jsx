import React from 'react'
import styles from './PaymentPageCard.module.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Image from "next/image";

const PaymentPageCard = ({ordernum, quantity, price, isSelected, voidButtonOnClick}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div className={[styles['PaymentPageCard'], isSelected && styles['PaymentPageCard--selected']].join(" ")}>
            <div className={styles['First-Section']}>
                <h3> Order # {ordernum} </h3>
            </div>
            <div className={styles['Second-Section']}>
                <div className={styles['Quantity-Section']}>
                    <h3> Number of Items: {quantity} </h3>
                </div>

                <div className={styles['Price-Section']}>
                    <h3> $ {price} </h3>
                    <button onClick={handleOpen}> Void </button>
                    <div>
                        <Modal open={open} onClose={handleClose}>
                            <Box className={styles['style']}>
                                <Button onClick={handleClose} className={styles['Close_Button']}> X </Button>
                                <div className={styles['Wrapper']}>
                                    <div className={styles['Image-Section']}>
                                        <Image
                                            src="/images/logo.png"
                                            alt="Escobar Logo"
                                            width="100"
                                            height="100"
                                            objectFit="contain"
                                        />
                                    </div>

                                    <div className={styles['Text-Section']}>
                                        <h1> Are You Sure You want to Delete the Order? </h1>
                                        <div className={styles['Button-Section']}>
                                            <button className={styles['Cancel_Button']} onClick={handleClose}> Cancel </button>
                                            <button className={styles['Confirm_Button']} onClick={()=>voidButtonOnClick(ordernum)}> Confirm </button>
                                        </div>
                                    </div>
                                </div>

                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PaymentPageCard

