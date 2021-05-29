const router = require('express').Router();
const MovieController = require('../controllers/movies_controller');

router.get('/count', MovieController.getMoviesCountsByYear);

module.exports = router;