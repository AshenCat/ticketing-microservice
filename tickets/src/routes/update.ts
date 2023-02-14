import { validateRequest, NotFoundError, requireAuth, NotAuthorizedError, BadRequestError } from '@kweebies/common';
import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { TicketUpdatedPublisher } from '../events/publishers/ticket-updated-publisher';
import { Ticket } from '../models/ticket';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.put('/api/tickets/:id',
    [
        body('title')
            .not()
            .isEmpty()
            .withMessage('title is required'),
        body('price')
            .isFloat({ gt: 0 })
            .withMessage('price must be greater than 0'),
    ],
    validateRequest,
    requireAuth, async (req: Request, res: Response) => {
        const ticket = await Ticket.findById(req.params.id);

        if (!ticket) throw new NotFoundError();

        if (ticket.orderId) {
            throw new BadRequestError('Cannot edit a reserved ticket');
        }

        if (ticket.userId !== req.currentUser?.id) {
            throw new NotAuthorizedError();
        }

        ticket.set({
            title: req.body.title,
            price: req.body.price
        });

        await ticket.save();

        await new TicketUpdatedPublisher(natsWrapper.client).publish({
            id: ticket.id,
            version: ticket.version,
            title: ticket.title,
            price: ticket.price,
            userId: ticket.userId
        });

        res.send(ticket);
    })

export { router as updateTicketRouter }