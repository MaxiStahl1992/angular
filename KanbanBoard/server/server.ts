
import * as express from 'express';
import {Application} from "express";
import {getAllTickets, getTicketById} from "./get-tickets";
import {saveTicket} from './save-ticket.route';

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({origin: true}));

app.use(bodyParser.json());

app.route('/api/tickets').get(getAllTickets);

app.route('/api/courses/:id').get(getTicketById);

app.route('/api/courses/:id').put(saveTicket);



const httpServer:any = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



