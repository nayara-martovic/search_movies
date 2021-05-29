
class Response {
    constructor() {
      this.statusCode = null;
      this.data = null;
      this.message = null;
    }
  
    setSuccess(message, data) {
      this.statusCode = 200;
      this.message = message;
      this.data = data;
    }

    setError(error) {
      this.statusCode = 500;

      if (error instanceof Error)
        this.message = error.message;
      else
        this.message = error;
    }
  
    setNotFound(message) {
      this.statusCode = 404;
      this.message = message;
    }
  
    send(res) {
      const result = {
        status: this.type,
        message: this.message,
        data: this.data,
      };
  
      return res.status(this.statusCode).json(result);
    }
}

module.exports = Response;