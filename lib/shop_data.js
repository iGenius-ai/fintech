import { images } from "../constants";

const shopData = [
  {
    "id": 1,
    "shopName": "Caleb Bukka Shop",
    "priceRange": {
      "start": 2500,
      "currency": "₦"
    },
    "close_time": "11:00pm",
    "deliveryTime": "34 - 36 min",
    "brandImage": images.foodplate
  },
  {
    "id": 2,
    "shopName": "Mama's Kitchen",
    "priceRange": {
      "start": 1800,
      "currency": "₦"
    },
    "close_time": "10:30pm",
    "deliveryTime": "25 - 30 min",
    "brandImage": images.foodplate
  },
  {
    "id": 3,
    "shopName": "Spicy Delights",
    "priceRange": {
      "start": 3000,
      "currency": "₦"
    },
    "close_time": "10:00pm",
    "deliveryTime": "40 - 45 min",
    "brandImage": images.foodplate
  }
]

export default shopData;