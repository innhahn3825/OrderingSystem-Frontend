import CustomerFoodOrder from "./CustomerFoodOrder";

class Order {
  orderId: number;
  employeeFullName: string;
  orderTime: Date;
  customerFoodOrders: Array<CustomerFoodOrder>;
  payment: number;
  totalCost: number;

  constructor(
    orderId: number,
    employeeFullName: string,
    orderTime: Date,
    customerFoodOrders: Array<CustomerFoodOrder>,
    payment: number,
    totalCost: number
  ) {
    this.orderId = orderId;
    this.employeeFullName = employeeFullName;
    this.orderTime = orderTime;
    this.customerFoodOrders = customerFoodOrders;
    this.payment = payment;
    this.totalCost = totalCost;
  }

  toJson() {
    return {
      orderId: this.orderId,
      employeeFullName: this.employeeFullName,
      orderTime: this.orderTime,
      customerFoodOrders: this.customerFoodOrders,
      payment: this.payment,
      totalCost: this.totalCost,
    };
  }
}

export default Order;
