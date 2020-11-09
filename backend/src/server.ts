import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { APP_PORT } from './config';
import routes from './routes';

import './database/connection';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(routes);

app.listen(APP_PORT, () => {
  console.log(`Server started on port: ${APP_PORT}`);
})