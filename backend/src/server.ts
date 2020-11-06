import express from 'express';
import cors from 'cors';
import { APP_PORT } from './config';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(APP_PORT, () => {
  console.log(`Server started on port: ${APP_PORT}`);
})