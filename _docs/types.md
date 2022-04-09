# Types

user {
    email: string,
    password: string
}
ticket {
    title: string,
    price: number,
    userId: ref to user,
    orderId: ref to order
}
order {
    userId: ref to user,
    status: ['Created', 'Cancelled', 'AwaitingPayment', 'Completed'],
    ticketId: ref to ticket,
    expiresAt: Date
}
Charge {
    orderId: ref to order,
    status: ['Created', 'Completed', 'Failed'],
    amount: number,
    stripeId: string,
    stripeRefundId: string
}

