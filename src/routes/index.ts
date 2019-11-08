import express from 'express';
import { upload } from '../utils/storage';
import { check } from 'express-validator';
import uploadRoute from './routes/upload';
import getOneRoute from './routes/getOne';
import fileRoute from './routes/fileRoute';
import getAllRoute from './routes/getAll';

const router: express.Router = express.Router();

router.get('/', getAllRoute);

router.get('/file', fileRoute);

router.get('/:name', getOneRoute);

router.post(
  '/upload',
  [
    check('file')
      .isEmpty()
      .trim()
      .escape()
  ],
  upload.single('file'),
  uploadRoute
);

export default router;
