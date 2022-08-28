import FoodOrder from "./FoodOrder";

class CustomerFoodOrder{

    customerFoodOrderId: number;
    foodOrder: FoodOrder;

    constructor(customerFoodOrderId: number, foodOrder: FoodOrder){
        this.customerFoodOrderId = customerFoodOrderId;
        this.foodOrder = foodOrder;
    }

}

export default CustomerFoodOrder;