import express from 'express';

const fileRoute = (req: express.Request, res: express.Response): void => {
  res.render('index');
};

export default fileRoute;
