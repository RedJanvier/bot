import 'colors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import routes from './routes';
import '../database/config/index';

const app = express();
const apiVersion = '/api/v1';

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(apiVersion, routes);

export default app;
