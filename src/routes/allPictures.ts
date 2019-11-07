import express from 'express';
import fs from 'fs';
import { options, storagePath, upload } from '../utils/storage';
import { check } from 'express-validator';
import ejs from 'ejs';
import multer from 'multer';

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

router.get('/file', (req: express.Request, res: express.Response) => {
  res.render('index');
});

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
  [
    check('file')
      .isEmpty()
      .trim()
      .escape()
  ],
  upload.single('file'),
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    const file = req.file;
    res.send(
      JSON.stringify({
        message: 'Picture stored correctly.',
        filename: file.originalname,
        url: req.headers.host + '/pictures/' + file.originalname
      })
    );
  }
);

export default router;
