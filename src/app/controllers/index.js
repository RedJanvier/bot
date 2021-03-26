import Sys from '../system';
import services from '../../database/services';
import ResponseController from './responses';

const { Utils } = Sys;

const Response = new ResponseController(services, Utils);

export default {
  Response,
};
