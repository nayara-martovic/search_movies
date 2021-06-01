
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
      this.data = null;

      if (error instanceof Error)
        this.message = error.message;
      else
        this.message = error;
    }
  
    setNotFound(message) {
      this.statusCode = 404;
      this.message = message;
      this.data = null;
    }
  
    send(res) {
      const result = {
        status: this.type,
        message: this.message,
        data: this.data,
      };
  
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Content-Type', 'application/json');

      return res.status(this.statusCode).json(result);
    }
}

module.exports = Response;