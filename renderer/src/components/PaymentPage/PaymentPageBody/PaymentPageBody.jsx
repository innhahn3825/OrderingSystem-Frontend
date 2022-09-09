import React, { useState, useEffect } from 'react';

import styles from './PaymentPageBody.module.scss';
import { PaymentCardData } from '../../../data/DataIndex';
import { PaymentPageCard } from '../../ComponentIndex'
import { TablePagination } from "@mui/material";
import shortid from 'shortid';

const PaymentPageBody = ({
  totalPages,
  pageNo,
  pageSize,
  pageNoOnChange,
  pageSizeOnChange,
  items,
  orderCardOnClick,
  orderCardSelected,
  voidButtonOnClick
}) => {

  return (
    <div className={styles["PaymentPageBody"]}>
      <TablePagination
        component="div"
        count={totalPages}
        page={pageNo}
        onPageChange={pageNoOnChange}
        rowsPerPage={pageSize}
        onRowsPerPageChange={pageSizeOnChange}
      />

      {items.map((item) => {
        return (
          <div key={shortid.generate()} onClick={()=>{orderCardOnClick(item.customerFoodOrders, item.orderId)}}>
            <PaymentPageCard
              ordernum={item.orderId}
              quantity={item.customerFoodOrders.length}
              price={item.payment}
              isSelected={orderCardSelected === item.orderId}
              voidButtonOnClick={voidButtonOnClick}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PaymentPageBody


