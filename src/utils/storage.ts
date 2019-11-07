import multer from 'multer';
import sha256 from 'sha256';
import path from 'path';

const storage: multer.StorageEngine = multer.diskStorage({
  destination: './pictures/',
  filename: (req, file, callback): void => {
    callback(null, sha256(new Date().toISOString()) + file.originalname);
  }
});

const upload: any = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    checkFileType(file, callback);
  }
});

let checkFileType = (file: any, cb: any) => {
  const fileTypes: RegExp = /jpeg|jpg|png|gif/;
  const extname = fileTypes.test(file.originalname.toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);
  if (mimeType && extname) {
    return cb(null, true);
  } else {
    cb('Error');
  }
};

// The path of image storing
const storagePath: string = path.join(__dirname, '../pictures/');

const options: any = {
  root: storagePath,
  dotfiles: 'deny'
};

export { upload, options, storagePath };
