const axios = require('axios');

const urlService = 'https://jsonmock..com/api/movies/search/';

class MovieService {
    static getAllMoviesByTitle(title) {
        let Promises = [];
        let pagesTotal = 1;

        return this
            .getAMoviesPageByTitle(1, title)
            .then(response => {
                pagesTotal = response.total_pages;

                for (let i = 1; i <= pagesTotal; i++)
                    Promises.push(this.getAMoviesPageByTitle(i, title));

                return Promise.all(Promises);
            });
    }

    static getAMoviesPageByTitle(page, title) {
        return axios
            .get(`${urlService}?Title=${title}&page=${page}`)
            .then(function (response) {                
                if(response.status == 200)
                    return response.data;

                return {};
            })
            .catch(function (error) {
                console.log(error);
                throw new Error('Service Request Error');
            });
    }

    static countMoviesByYear(pagesMovies){
        let counter = {};
        let total = 0;

        pagesMovies.forEach(page => {
            if(page.data)
                page.data.forEach(movie => addMovieToCounter(movie.Year));
        });

        formatCounter();

        return {
            moviesByYear: counter,
            total: total
        };

        function addMovieToCounter (year) {
            if (counter[year] == undefined)
                counter[year] = 1;
            else
                counter[year]++;
        };

        function formatCounter (){
            counter = Object.keys(counter).map(key => {
                total += counter[key];            
                return {
                    year: key,
                    movies: counter[key] 
                };
            });
        }
    }
}

module.exports = MovieService;