import {Request, Response} from 'express';
import {TICKETS} from "./db-data";
import {setTimeout} from 'timers';


export function saveTicket(req: Request, res: Response) {

    const id = req.params["id"],
        changes = req.body;

    console.log("Saving course", id, JSON.stringify(changes));


    TICKETS[id] = {
        ...TICKETS[id],
        ...changes
    };

    setTimeout(() => {

        res.status(200).json(TICKETS[id]);

    }, 2000);



}
