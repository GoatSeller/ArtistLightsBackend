import express from 'express';
import router from './routes';

let app: express.Application = express();

app.use(router);

app.listen(8000, () => {
  console.log('Server started');
});
