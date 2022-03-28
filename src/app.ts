import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";

import config from './config';
import { log } from './utils';

const app: Express = express();


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))



app.listen(config.port, () => {
    log.info(`Server stated on port: ${config.port}`);
});