/* eslint-disable no-underscore-dangle */
class ResponseServices {
  constructor(models) {
    this.models = models;
  }

  getAll = async () => {
    const responses = await this.models.Response.find();
    if (!responses) return null;
    return responses;
  };

  findOne = async (by) => {
    const response = await this.models.Response.findOne(by);
    if (!response) return null;
    return response._doc;
  };

  create = async (data) => {
    const response = await this.models.Response.create(data);
    return response;
  };

  update = async (userId, data) => {
    const response = await this.models.Response.findOneAndUpdate(
      { userId },
      data
    );
    return response;
  };
}

export default ResponseServices;
