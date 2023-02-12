import { OrderCancelledEvent, Publisher, Subjects } from "@kweebies/common";


export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}