import { Router } from 'express';
import Controllers from '../controllers';
import Core from '../../core';

const app = Router();
const { Events, Interactions } = Core.Utils.Slack;

app.use('/events', Events.expressMiddleware());
app.use('/actions', Interactions.expressMiddleware());

Events.on('app_mention', Controllers.Bot.handleMention);
Events.on('error', Controllers.Bot.handleErrors);
Interactions.action({ callbackId: 'subjects' }, Controllers.Bot.handleMood);
Interactions.action({ actionId: 'free-time' }, Controllers.Bot.handleFreeTime);
Interactions.action({ actionId: 'hobby-select' }, Controllers.Bot.handleHobby);
Interactions.viewSubmission(
  'digits-on-scale',
  Controllers.Bot.handleSubmission
);

export default app;
