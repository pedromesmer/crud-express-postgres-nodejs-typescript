import { usersRoutes } from '@modules/users/infra/http/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Server is alive' });
});

routes.use('/users', usersRoutes);

export { routes };
