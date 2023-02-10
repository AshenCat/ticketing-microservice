import { Publisher, Subjects, TicketUpdatedEvent } from "@kweebies/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}