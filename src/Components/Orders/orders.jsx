import React, { useState } from 'react'

function orders() {
    const [orders, setOrders] = useState([
        {
            "id": 1,
            "userId": 1,
            "orderDate": "2024-10-20",
            "orderStatus": "Shipped",
            "orderTotal": 49.98,
            "orderItems": [
              {
                "bookId": 1,
                "quantity": 1,
                "price": 29.99
              },
              {
                "bookId": 2,
                "quantity": 1,
                "price": 19.99
              }
            ],
            "deliveryAddress": "123 Main Street, New York, NY"
          }
    ]);
  return (
    <div>orders</div>
  )
}

export default orders