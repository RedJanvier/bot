import 'dotenv/config';
import '@babel/polyfill';
import app from './app';
import Core from './core';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => Core.Utils.logger.info(`Server started at ${PORT}`));
