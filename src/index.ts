import express from 'express';
import router from './routes';

let app: express.Application = express();

app.set('view engine', 'ejs');

app.use(express.static('./views'));

app.use(router);

app.listen(8000, () => {
  console.log('Server started');
});
