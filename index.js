const express = require('express'),

  // The body-parser middleware module allows you to read the “body” of HTTP requests within your request handlers simply by using the code req.body.
  bodyParser = require('body-parser'),

  // With Universally Unique Identifier module installed, you’re able to generate a unique ID at any point in time by simply using the code uuid.v4().
  uuid = require('uuid');

  // HTTP request logger middleware 
  morgan = require('morgan');

const app = express();

app.use(bodyParser.json());

// HTTP request logger printing time stamp and request type to terminal
app.use(morgan('common'));

// Routing requests for static files pointing on directory public
app.use(express.static('public'));

// Get a list of all movies
app.get('/movies', (req, res) => {
  res.status(200).send('Successful GET request returning data on all movies');
});

// Get data about a movie by title
app.get('/movies/:movie', (req, res) => {
  res.status(200).send('Successful GET request returning data on movie by title: ' + req.params.movie);
});

// Get data about a genre by name
app.get('/movies/genres/:genre', (req, res) => {
  res.status(200).send('Successful GET request returning on genre by name: ' + req.params.genre);
});

// Get data about a director by name
app.get('/movies/directors/:director', (req, res) => {
  res.status(200).send('Successful GET request returning on director by name: ' + req.params.director);
});

// Add new user
app.post('/users', (req, res) => {
  res.status(201).send('Successful POST request adding new user.');
});

// Update new user
app.put('/users/:username', (req, res) => {
  res.status(201).send('Successful PUT request updating new user: ' + req.params.username);
});

// Add a movie to users list of favorites
app.post('/users/:username/movies/:movie', (req, res) => {
  res.status(201).send('Successful POST request adding movie ' + req.params.movie + ' to favorites of user ' + req.params.username);
});

// Remove a movie to users list of favorites
app.delete('/users/:username/movies/:movie', (req, res) => {
  res.status(201).send('Successful DELETE request removing movie ' + req.params.movie + ' from favorites of user ' + req.params.username);
});

// Remove a user
app.delete('/users/:username', (req, res) => {
  res.status(201).send('Successful DELETE request removing user: ' + req.params.username);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('something broke!');
});

app.listen(8080, () =>
  console.log('Your app is listening on port 8080.'));
  