class BotControllers {
  constructor(Services, Utils, CoreUtils) {
    this.Services = Services;
    this.Utils = Utils;
    this.CoreUtils = CoreUtils;
    this.Slack = CoreUtils.Slack;
    this.Templates = CoreUtils.Slack.Templates;
  }

  handleMention = async (event) => {
    try {
      if (!event.text.includes('Hello')) {
        await this.Slack.Messages.sendMessage(event.channel, {
          text: `Sorry <@${event.user}>! :pensive: I'm not able to respond yet...\nCan you try running "Hello @Bot" instead!`,
        });
      } else {
        const user = await this.Services.Response.findOne({
          userId: `${event.user}`,
        });
        if (!user) {
          await this.Services.Response.create({ userId: `${event.user}` });
        }
        await this.Slack.Messages.sendMessage(
          event.channel,
          this.Templates.messageJsonBlock
        );
      }
    } catch (error) {
      this.CoreUtils.logger.error(error);
    }
  };

  handleMood = async (payload) => {
    try {
      const mood = payload.actions[0].selected_options[0].value;
      await this.Services.Response.update(payload.user.id, { mood });
      await this.Slack.Messages.sendMessage(
        payload.channel.id,
        this.Templates.timeJsonBlock
      );
    } catch (error) {
      this.CoreUtils.logger.error(error);
    }
  };

  handleFreeTime = async (payload) => {
    try {
      const freeTime = payload.actions[0].selected_time;
      await this.Services.Response.update(payload.user.id, { freeTime });
      await this.Slack.Messages.sendMessage(
        payload.channel.id,
        this.Templates.hobbyJsonBlock
      );
    } catch (error) {
      this.CoreUtils.logger.error(error);
    }
  };

  handleHobby = async (payload) => {
    try {
      const state = this.Utils.Object.selectFirstOf(payload.state.values);
      const hobby = this.Utils.Object.selectFirstOf(state).selected_options.map(
        (opt) => opt.value
      );
      await this.Services.Response.update(payload.user.id, { hobby });
      await this.Slack.WebClient.views.open({
        trigger_id: payload.trigger_id,
        view: this.Templates.modalJsonBlock,
      });
    } catch (error) {
      this.CoreUtils.logger.error(error);
    }
  };

  handleErrors = (error) => {
    this.CoreUtils.logger.error(`error: ${error}`);
  };

  handleSubmission = async (payload) => {
    try {
      const blockData = payload.view.state;

      const { value } = blockData.values.digits['3_digits'];
      const digitsOnScale = +value;

      if (!digitsOnScale) {
        return {
          response_action: 'errors',
          errors: {
            digits: 'Please enter only numbers!',
          },
        };
      }

      if (value.length < 3) {
        return {
          response_action: 'errors',
          errors: {
            digits: 'You must add atleast 3 last digits of the number scale',
          },
        };
      }

      await this.Services.Response.update(payload.user.id, { digitsOnScale });

      return {
        response_action: 'clear',
      };
    } catch (error) {
      this.CoreUtils.logger.error(error);
    }
  };
}

export default BotControllers;
