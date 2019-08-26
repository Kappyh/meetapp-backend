import { Router } from 'express';

const routes = new Router();

routes.use('/', (req, res) => {
  return res.status(200).json({ message: 'Hello meetapp' })
});
export default routes;
