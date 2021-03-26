import 'dotenv/config';
import { connect } from 'mongoose';
import Core from '../../core';

const { logger } = Core.Utils;

const connectDB = async () => {
  try {
    const { MONGO_URI, MONGO_URI_TEST, NODE_ENV } = process.env;
    const conn = await connect(
      NODE_ENV === 'test' ? MONGO_URI_TEST : MONGO_URI,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      },
    );

    logger.info(
      `Database Connected: ${conn.connection.host} in ${NODE_ENV} mode`,
    );
  } catch (err) {
    logger.error(`Error: ${err.message}`);
  }
};

connectDB();
