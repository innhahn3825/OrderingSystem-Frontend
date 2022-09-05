import React, { useState, useEffect } from 'react';
import styles from './PaymentPage.module.scss';
import { Sidebar, PaymentPageBody, PaymentOrderTab } from "../ComponentIndex";
import Pagination from "../../models/Pagination.tsx";
import Rest from "../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

const PaymentPage = () => {
  
  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState(new Pagination(0, 10, "None", true));
  const [totalPages, setTotalPages] = useState(0);
  const [orderTabItems, setOrderTabItems] = useState([]);
  const [orderCardSelected, setOrderCardSelected] = useState(null);

  const rest = new Rest();

  const handlePageSizeOnChange = (event) => {
    setPagination(
      new Pagination(
        pagination.pageNo,
        parseInt(event.target.value, 10),
        pagination.sortedBy,
        pagination.isAscending
      )
    );
  }

  const handlePageNoOnChange = (event, newPageNo) => {
    setPagination(
      new Pagination(
        newPageNo,
        pagination.pageSize,
        pagination.sortedBy,
        pagination.isAscending
      )
    );
  }

  const handleOrderCardOnClick = (items, orderId) => {
    setOrderTabItems(items);
    setOrderCardSelected(orderId);
  }

  const handleOrdersLoad = (contents) => {
    setOrders(contents);
  }

  const handleTotalPagesLoad = (data) => {
    setTotalPages(data);
  }

  const getAllOrders = () => {
    rest.getWithPagination(
      `${INITIAL_URL}/orders/paged`,
      pagination.tojson(),
      handleOrdersLoad,
      handleTotalPagesLoad
    );
  }

  useEffect(() => {
    getAllOrders();
  }, [pagination]);

  return (
    <div className={styles["PaymentPage"]}>
      <Sidebar page="paymentpage" />
      <div className={styles["Component"]}>
        <PaymentPageBody
          items={orders}
          totalPages={totalPages}
          pageNo={pagination.pageNo}
          pageSize={pagination.pageSize}
          orderCardSelected={orderCardSelected}
          pageNoOnChange={handlePageNoOnChange}
          pageSizeOnChange={handlePageSizeOnChange}
          orderCardOnClick={handleOrderCardOnClick}
        />
        <PaymentOrderTab orderTabItems={orderTabItems} />
      </div>
    </div>
  );
}

export default PaymentPage

