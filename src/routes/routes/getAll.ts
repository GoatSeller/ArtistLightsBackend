import fs from 'fs';
import { storagePath } from '../../utils/storage';
import express from 'express';

const getAllRoute = (req: express.Request, res: express.Response): void => {
  fs.readdir(storagePath, (err: Error | null, files: Array<string>): void => {
    const attractions: Array<any> = [];
    for (let f of files) {
      attractions.push({
        url: req.headers.host + req.url + f
      });
    }
    res.send(attractions);
  });
};

export default getAllRoute;
