class MessageUtils {
  constructor(WebClient) {
    this.WebClient = WebClient;
  }

  sendMessage = async (channel, message) => {
    const result = await this.WebClient.chat.postMessage({
      channel,
      attachments: [message],
      response_type: 'ephemeral',
    });

    return result;
  };

  respondTo = async (url, message) => {
    const result = await this.WebClient.respond(url, message);

    return result;
  };
}

export default MessageUtils;
