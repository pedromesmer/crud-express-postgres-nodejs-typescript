import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { UsersController } from '../controllers/UsersController';

const usersController = new UsersController();

const usersRoutes = Router();

usersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object({
      name: Joi.string().required(),
    }),
  }),
  usersController.create,
);
usersRoutes.get('/', usersController.show);

usersRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.string().required(),
    }),
  }),
  usersController.delete,
);

export { usersRoutes };
