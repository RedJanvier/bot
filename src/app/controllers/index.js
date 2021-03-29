import Sys from '../system';
import services from '../../database/services';
import ResponseController from './responses';
import BotControllers from './bot';
import core from '../../core';

const { Utils } = Sys;
const { Utils: CoreUtils } = core;

const Response = new ResponseController(services, Utils, CoreUtils);
const Bot = new BotControllers(services, Utils, CoreUtils);

export default {
  Response,
  Bot,
};
