import {Request, Response} from 'express';
import {TICKETS} from "./db-data";

export function getAllTickets(req: Request, res: Response) {  
/*     const error = (Math.random() >= 0.5);

    if (error) {
        console.log("ERROR loading courses!");
        res.status(500).json({message: 'random error occurred.'});
    }
    else {
    */

    setTimeout(() => {

        res.status(200).json({payload:Object.values(TICKETS)});

    }, 200);

   //}
}


export function getTicketById(req: Request, res: Response) {

    const ticketId = req.params["id"];

    const tickets:any = Object.values(TICKETS);

    const ticket = tickets.find(t => t.id == ticketId)

    res.status(200).json(ticket);
}