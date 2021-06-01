const MovieService = require("../services/movie_service");
const Response = require("../utils/response");

class MovieController {

    static getMoviesCountsByYear(req, res) {
        let title = req.query.title;
        const resp = new Response();

        return MovieService
            .getAllMoviesByTitle(title)
            .then(response => {
                if (response && response.length){
                    response = MovieService.countMoviesByYear(response);
                    resp.setSuccess("Movies founded", response);
                }else {
                    resp.setNotFound("No movies found");
                }

                resp.send(res);
            })
            .catch(error => {
                resp.setError(error);
                resp.send(res);
            });
    }

}

module.exports = MovieController;