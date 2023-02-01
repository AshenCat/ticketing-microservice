import { validateRequest, NotFoundError, requireAuth, NotAuthorizedError } from '@kweebies/common';
import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { Ticket } from '../models/ticket';

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

        if (ticket.userId !== req.currentUser?.id) {
            throw new NotAuthorizedError();
        }

        ticket.set({
            title: req.body.title,
            price: req.body.price
        });

        await ticket.save()

        res.send(ticket);
    })

export { router as updateTicketRouter }