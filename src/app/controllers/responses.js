class ResponseController {
  constructor(services, utils) {
    this.Services = services;
    this.Utils = utils;
  }

  findAll = async (req, res) => {
    const responses = await this.Services.Response.getAll();
    res.status(200).json({ status: 200, message: 'Responses successfully retrieved', data: responses });
  }
}

export default ResponseController;
