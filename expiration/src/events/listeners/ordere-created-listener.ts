import { Listener } from "@kweebies/common";
import {Message} from 'node-nats-streaming';
import { OrderCreatedEvent } from "@kweebies/common/build/events/order-created-event";
import { Subjects } from "@kweebies/common/build/events/subjects";
import { queueGroupName } from "./queue-group-name";
import { expirationQueue } from "../../queues/expiration-queue";


export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
    subject: Subjects.OrderCreated =  Subjects.OrderCreated;
    queueGroupName = queueGroupName;

    async onMessage(data: OrderCreatedEvent['data'], msg: Message) {

        const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
        console.log('waiting this many ms to process the job: ', delay)

        await expirationQueue.add({
            orderId: data.id,
        }, {
            delay: delay,
        });

        msg.ack();
    }
}