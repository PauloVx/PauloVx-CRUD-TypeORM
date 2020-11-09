import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error(`Could not connect to database ${err}`));