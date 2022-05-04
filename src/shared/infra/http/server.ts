import express from 'express';
import { routes } from './routes';

import '@shared/infra/typeorm';
import '@shared/container';
import '@shared/error/AppError';

const app = express();

app.use(routes);

app.listen(3333, () => {
  console.log(`🚀 Server started on port 3333`);
});
