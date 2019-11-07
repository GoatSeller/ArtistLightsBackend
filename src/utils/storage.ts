import multer from 'multer';
import sha256 from 'sha256';
import path from 'path';

const storage: multer.StorageEngine = multer.diskStorage({
  destination: (req, file, callback): void => {
    callback(null, './pictures/');
  },
  filename: (req, file, callback): void => {
    callback(null, sha256(new Date().toISOString()) + file.originalname);
  }
});

const upload: multer.Instance = multer({ storage: storage });

// The path of image storing
const storagePath: string = path.join(__dirname, '../pictures/');

const options: any = {
  root: storagePath,
  dotfiles: 'deny'
};

export { upload, options, storagePath };
