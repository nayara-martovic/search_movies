const express = require('express');
const config = require('dotenv-safe');
const app = express();

const MoviesRouter = require('./routes/movies_routes');

config.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/movies', MoviesRouter);

app.get('*', (req, res) => res.status(200).send({status: 200, message: 'Welcome to this API.'}));

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}...`);
});

module.exports = app;