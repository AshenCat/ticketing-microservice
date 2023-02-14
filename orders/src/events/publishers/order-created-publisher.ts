import { OrderCreatedEvent, Publisher, Subjects } from "@kweebies/common";


export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}