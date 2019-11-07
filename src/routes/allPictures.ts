import express from 'express';
import fs from 'fs';
import { options, storagePath, upload } from '../utils/storage';

const router: express.Router = express.Router();

/**
 * Returns array of loaded pictures
 */
router.get(
  '/',
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    fs.readdir(storagePath, (err, files): void => {
      const attrazioni: Array<any> = [];
      for (let f of files) {
        attrazioni.push({
          url: req.headers.host + req.url + f
        });
      }
      res.send(attrazioni);
    });
  }
);

/**
 * Retrieve a picture
 */
router.get(
  '/:name',
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    res.sendFile(storagePath + req.params.name, (err: Error): void => {
      if (err) res.sendStatus(400);
    });
  }
);

/**
 * Upload an image
 */
router.post(
  '/upload',
  upload.single(options),
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    const file = req.body.file;
    res.send(
      JSON.stringify({
        message: 'Picture stored correctly.',
        filename: file.filename,
        url: req.headers.origin + req.baseUrl + '/' + file.filename
      })
    );
  }
);

export default router;
