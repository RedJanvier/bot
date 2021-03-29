import { WebClient } from '@slack/web-api';
import { createEventAdapter } from '@slack/events-api';
import { createMessageAdapter } from '@slack/interactive-messages';
import * as Templates from './templates';
import MessageUtils from './messages';

const { SLACK_SIGNIN_SECRET, SLACK_BOT_TOKEN } = process.env;

const webClient = new WebClient(SLACK_BOT_TOKEN);
const Events = createEventAdapter(SLACK_SIGNIN_SECRET);
const Interactions = createMessageAdapter(SLACK_SIGNIN_SECRET);
const Messages = new MessageUtils(webClient);

export default {
  Events,
  Templates,
  Interactions,
  WebClient: webClient,
  Messages,
};
