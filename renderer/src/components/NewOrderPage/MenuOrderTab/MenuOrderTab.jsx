import React, {useState, useEffect} from 'react'
import styles from './MenuOrderTab.module.scss'
import Image from "next/image";
import Link from "next/link";
import { MenuOrderTabCard } from "../../ComponentIndex";
import shortid from 'shortid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const MenuOrderTab = ({
  menuOnCategory,
  handleQuantityOnChange,
  handleDeleteItemButtonOnClick,
  deleteAllItemOnClick,
  payButtonOnClick
}) => {

  const [total, setTotal] = useState(1);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };


  useEffect(() => {
    setTotal(
      menuOnCategory.orderMenu.reduce(
        (sum, currentMenu) =>
          sum + currentMenu.menuPrice * currentMenu.orderMenuQuantity,
        0
      )
    );
  }, [menuOnCategory]);



  return (
    <div className={styles["MenuOrderTab"]}>
      <div className={styles["txt-section"]}>
        <h3> New Order </h3>
        <button onClick={deleteAllItemOnClick}>
          <Image
            src="/images/delete.svg"
            alt="delete icon"
            width="20"
            height="20"
            objectFit="cover"
          />
        </button>
      </div>

      <div className={styles["container"]}>
        {menuOnCategory.orderMenu.map((item) => {
          return (
            <div
              className={styles["container-section"]}
              key={shortid.generate()}
            >
              <MenuOrderTabCard
                title={item.menuName}
                price={item.menuPrice}
                quantity={item.orderMenuQuantity}
                quantityOnChange={handleQuantityOnChange}
                handleDeleteItemButtonOnClick={handleDeleteItemButtonOnClick}
              />
            </div>
          );
        })}
      </div>
      <div className={styles["total-section"]}>
        <div className={styles["total-section--wrapper"]}>
        <h1 onClick={handleOpen}> $ {total}</h1>
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
                    <h1> Please input the Customer Payment </h1>
                      <div className={styles['Button-Section']}>
                      <input type="text" id="first" className={styles["Input-Forms"]} placeholder="Input the money of the customer" />
                        <ChildModal className={styles['Confirm_Button']} payButtonOnClick = {payButtonOnClick} />
                      </div>
                  </div>
                </div>
              </Box>
              </Modal>
        <div onClick={handleOpen} className={styles["pay-section"]}>
          <h2 > Pay </h2>
          <Image
            src="/images/chevron.svg"
            alt="delete icon"
            width="20"
            height="20"
            objectFit="cover"
          />
        </div>
      </div>


    </div>
    </div>
  );
};

function ChildModal({payButtonOnClick}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    {payButtonOnClick}
  };
  const handleClose = () => {
    setOpen(false);
    
  };

  return (
    <React.Fragment>
      <Button className={styles['Confirm_Button']} onClick={handleOpen}>Confirm</Button>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box className={styles['child-style']}>
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
                  <h1> The Change for the transaction is:  </h1>
                    <div className={styles['Change-Section']}>
                      <h1> Change </h1> 
                    </div>
                </div>
            </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}


export default MenuOrderTab

