import request from 'supertest';
import { app } from '../../app';
import { Order, OrderStatus } from '../../models/order';
import { Ticket } from '../../models/ticket';

// it('returns an error if one user tries to delete another persons` order', async () => {
//     // Create a ticket
//     const ticket = Ticket.build({
//         title: 'concert',
//         price: 20
//     });
//     await ticket.save();

//     const user = global.signin();
//     // make a request to build an order with this ticket
//     const { body: order } = await request(app)
//         .post('/api/orders')
//         .set('Cookie', user)
//         .send({ ticketId: ticket.id })
//         .expect(201);

//     // make request to fetch the order
//     await request(app)
//         .get(`/api/orders/${order.id}`)
//         .set('Cookie', global.signin())
//         .send()
//         .expect(401);
// })

it('marks an order as cancelled', async () => {
    // Create a ticket
    const ticket = Ticket.build({
        title: 'concert',
        price: 20
    });
    await ticket.save();

    const user = global.signin();
    // make a request to build an order with this ticket
    const { body: order } = await request(app)
        .post('/api/orders')
        .set('Cookie', user)
        .send({ ticketId: ticket.id })
        .expect(201)

    // make request to cancel the order
    await request(app)
        .delete(`/api/orders/${order.id}`)
        .set('Cookie', user)
        .send()
        .expect(204);

    // expectation to make sure the thing is cancelled
    const updatedOrder = await Order.findById(order.id);

    expect(updatedOrder?.status).toEqual(OrderStatus.Cancelled);
})

it.todo('emits an order cancelled event')