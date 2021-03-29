import '../database/config';
import express from 'express';
import slackSetup from './routes/slack';
import routes from './routes';

const app = express();

app.use('/slack', slackSetup);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

export default app;
