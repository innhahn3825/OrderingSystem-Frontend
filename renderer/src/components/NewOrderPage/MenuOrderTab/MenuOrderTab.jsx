import React, {useState, useEffect} from 'react'
import styles from './MenuOrderTab.module.scss'
import Image from "next/image";
import { MenuOrderTabCard } from "../../ComponentIndex";
import shortid from 'shortid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';
import dropdownIcon from '@iconify/icons-gridicons/dropdown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const MenuOrderTab = ({
  menuOnCategory,
  handleQuantityOnChange,
  handleDeleteItemButtonOnClick,
  deleteAllItemOnClick,
  payButtonOnClick
}) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [total, setTotal] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [type, setType] = useState('new-user');
  const handleTypeChange = (e) => {
    setType(e.target.value);
  }
  const [customerPayment, setCustomerPayment] = useState(0);
  const [discountPayment, setDiscountPayment] = useState(0);


  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    console.log("open");
    setOpen(true);
  };
  const customerPaymentOnChange = (e) => {
    setCustomerPayment(e.target.value);
  }
  const discountPaymentOnChange = (e) => {
    setDiscountPayment(e.target.value);
  }

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
        <ToggleButtonGroup
          className={'toggle_group'}
          value={type}
          exclusive
          onChange={handleTypeChange}
        >
          <ToggleButton value="new-user">New Order</ToggleButton>
          <ToggleButton value="existing-">Existing Order</ToggleButton>
        </ToggleButtonGroup>        
      <button onClick={deleteAllItemOnClick}>
          <Image
            src="/images/delete.svg"
            alt="clear all icon"
            width="20"
            height="20"
            objectFit="cover"
            draggable="false"
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
                numberOfServingsLeft={item.numberOfServingsLeft}
                handleDeleteItemButtonOnClick={handleDeleteItemButtonOnClick}
              />
            </div>
          );
        })}
      </div>
        <Box sx={{ minWidth: 120 }} className={[styles["InputLabel"], type === "new-user" && styles["none"]].join(" ")}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"> Select Order Menu </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Select Order Menu"
            onChange={handleChange}
          >
            
          {menuOnCategory.orderMenu.map((item) => {
            return (
              <div
                className={styles["container-section"]}
                key={shortid.generate()}
              >
              <MenuItem> {item.menuId} </MenuItem>
              
            </div>
            );
          })}
          </Select>
        </FormControl>
      </Box>
      <div className={styles["total-section"]} onClick={handleOpen}>
        <div className={styles["total-section--wrapper"]}>
          <h1> ₱ {total}</h1>
          <div className={styles["pay-section"]}>
            <h2> Pay </h2>
            <Image
              src="/images/chevron.svg"
              alt="Chevron icon"
              width="20"
              height="20"
              objectFit="cover"
              draggable="false"
            />
          </div>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box className={styles["style"]}>
          <Button onClick={handleClose} className={styles["Close_Button"]}>
            {" "}
            X{" "}
          </Button>
          <div className={styles["Image-Section"]}>
              <Image
                src="/images/logo.png"
                alt="Escobar Logo"
                width="40"
                height="40"
                objectFit="contain"
                draggable="false"
              />
            </div>
          <div className={styles["Wrapper"]}>
            <div className={styles["Text-Section"]}>
            <div className={styles["Input-Section--Payment"]}>

              <h1> Please input the Customer Payment : </h1>
              <input
                  value={customerPayment}
                  onChange={customerPaymentOnChange}
                  type="text"
                  id="first"
                  className={styles["Input-Forms--Payment"]}
                  placeholder="Input the money of the customer"
                />
                </div>

                <div className={styles["Input-Section--Discount"]}>
                <h1> Input Discount Value : </h1>
                <input
                  value={discountPayment}
                  onChange={discountPaymentOnChange}
                  type="text"
                  id="first"
                  className={styles["Input-Forms--Discount"]}
                  placeholder="Input Percentage of the Discount"
                />
                <h1 className={styles["Percentage"]}> % </h1>
                </div>

                </div>
              <div className={styles["Button-Section"]}>
                <ChildModal
                  className={styles["Confirm_Button"]}
                  payButtonOnClick={payButtonOnClick}
                  total={total}
                  customerPayment={customerPayment}
                  handleMainModalClose={handleClose}
                  discountPayment={discountPayment}
                  menuOnCategory={menuOnCategory}

                />
              </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};



function ChildModal({payButtonOnClick, total, customerPayment, handleMainModalClose, discountPayment, menuOnCategory}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (isNaN(customerPayment)){
      if (customerPayment.substring(0, 1) === "₱"){
        toast.error(" Please remove the ₱ Sign ");
      }
      else{
        toast.error(" The Customer Payment must be a number");
      }
    }
    else if (isNaN(discountPayment)){
      toast.error("Please Input a Number for the Discount Value");
    }
    else{

      if (total > customerPayment){ 
        toast.error(" The Customer Payment must be higher than the total");
        
      }
      else if (customerPayment < 0){ 
        toast.error(" The Customer Payment should be higher than 0");
      }
      else{ 
        if (discountPayment < 0) {
          toast.error(" Discount should be higher than 0");
        }
        else{
          setOpen(true);
        }
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
    payButtonOnClick(customerPayment, discountPayment)
    handleMainModalClose()

  };

  return (
    <React.Fragment>
      <Button className={styles['Confirm_Button']} onClick={handleOpen}>Confirm</Button>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box className={styles['child-style']}>
          <div className={styles['Image-Section']}>
            <Image
                src="/images/logo.png"
                alt="Escobar Logo"
                width="40"
                height="40"
                objectFit="contain"
            />
          </div>
        <Button onClick={handleClose} className={styles['Close_Button']}> X </Button>
        <Icon icon="bytesize:print" height = "25" width = "25" className={styles["print-icon"]} onClick={() => printPdf(title, pdfColumns, pdfRows)}/>

          <div className={styles['Wrapper']}>

            
                <div className={styles['Text-Section']}>
                  <h1 className={styles['Order-Text']}> Order # 20  </h1>
                  <h1  className={styles['Date-Text']}> {`${new Date().getFullYear()} / ${new Date().getMonth()} / ${new Date().getDate()}`} </h1>
                </div>

                <div className={styles['Title-Section']}>
                  <h2 className={styles['Qty-Text']}> Qty </h2>
                  <h2  className={styles['Title-Text']}> Item Title  </h2>
                  <h2 className={styles['Price-Text']}> Price  </h2>
                </div>

                {menuOnCategory.orderMenu.map((item) => {
                  return (
                    <div className={styles["Component-Section"]} key={shortid.generate()}>
                      <h6 className={styles['Quantity-Component']}>{item.orderMenuQuantity} </h6>
                      <h6 className={styles['Menuname-Component']}>{item.menuName}</h6>
                      <h6 className={styles['Price-Component']}> {item.menuPrice}</h6>
                    </div>
                  );
                })}

                <div className={styles['CustomerPayment-Section']}>
                  <h2 className={styles['CustomerPayment']}> Customer Payment </h2>
                  <h2  className={styles['CustomerPaymentPrice']}> ₱ {customerPayment}  </h2>
                </div>

                <div className={styles['Subtotal-Section']}>
                  <h2 className={styles['Subtotal']}> SubTotal </h2>
                  <h2  className={styles['SubtotalPrice']}> ₱ {total}  </h2>
                </div>

                <div className={styles['Discounted-Section']}>
                  <h2 className={styles['Discount']}> Discounted Price </h2>
                  <h2  className={styles['DiscountPrice']}> ₱ {total * (discountPayment/100)}  </h2>
                </div>

                <div className={styles['Total-Section']}>
                  <h2 className={styles['Total']}> Total </h2>
                  <h2  className={styles['TotalPrice']}> ₱ {total - (total * (discountPayment/100))}  </h2>
                </div>

                <div className={styles['Change-Section']}>
                  <h2 className={styles['Change']}> Change </h2>
                  <h2  className={styles['ChangePrice']}> ₱ {customerPayment - (total - (total * (discountPayment/100)))}  </h2>
                </div>
              
            </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}



export default MenuOrderTab

