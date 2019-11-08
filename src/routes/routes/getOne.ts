import express from 'express';
import { storagePath } from '../../utils/storage';

const getOneRoute = (req: express.Request, res: express.Response): void => {
  res.sendFile(storagePath + req.params.name, (err: Error): void => {
    if (err) res.sendStatus(400);
  });
};

export default getOneRoute;
