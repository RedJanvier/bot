class ResponseServices {
  constructor(models) {
    this.models = models;
  }

  getAll = async () => {
    const responses = await this.models.Response.find();
    if(!responses) return null;
    return responses;
  } 
}

export default ResponseServices;
