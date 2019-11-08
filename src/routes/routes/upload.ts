import express from 'express';

const uploadRoute = (req: express.Request, res: express.Response): void => {
  try {
    res.send(
      JSON.stringify({
        message: 'Picture stored correctly.',
        filename: req.file.originalname,
        url: req.headers.host + '/pictures/' + req.file.originalname
      })
    );
  } catch (err) {
    res.send('Error');
  }
};

export default uploadRoute;
