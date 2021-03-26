import ResponseServices from './responseServices';
import db from '../models';

const Response = new ResponseServices(db);

export default {
  Response,
}
