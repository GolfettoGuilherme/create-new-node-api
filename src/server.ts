import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import uploadConfig from './config/upload';

import './database';

const app = express();
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory)); // para servir arquivos estaticos

app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server Started at port 3333');
});
