import express from 'express';
import router from './routes/allPictures';

let app: express.Application = express();

app.set('view engine', 'ejs');

app.use(express.static('./views'));
/*
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const err: any = new Error('Not found');
    err.status = 404;
    next(err);
  }
);

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(err.status || 500);
    res.json({
      message: err.message
    });
  }
);
 */

app.use(router);

app.listen(8000, () => {
  console.log('Server started');
});
