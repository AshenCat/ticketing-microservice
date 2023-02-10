import { Publisher, Subjects, TicketCreatedEvent } from "@kweebies/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}