enum OrderStatus {
  PENDING = 'pending',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELED = 'canceled',
}

const orderMessages = {
  [OrderStatus.PENDING]: 'Order is pending',
  [OrderStatus.SHIPPED]: 'Order has been shipped',
  [OrderStatus.DELIVERED]: 'Order has been delivered',
  [OrderStatus.CANCELED]: 'Order was canceled',
} as const

type OrderMessage = (typeof orderMessages)[keyof typeof orderMessages]

function getOrderMessage(status: OrderStatus): OrderMessage {
  return orderMessages[status]
}


/**Tests */

console.log(getOrderMessage(OrderStatus.SHIPPED))
console.log(getOrderMessage(OrderStatus.PENDING))