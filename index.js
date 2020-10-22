const express = require('express'),
  morgan = require('morgan');

const app = express();

let myTopTenMovies = [
  {
    title: 'Pulp Fiction',
    cast: 'John Travolta, Samuel L. Jackson, Bruce Willis, Uma Thurman'
  },
  {
    title: 'Fargo',
    cast: 'Frances McDormand, William H. Macy, Steve Buscemi, Harve Presnell'
  },
  {
    title: 'Inception',
    cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Tom Hardy, Marion Cotillard'
  },
  {
    title: 'Interstellar',
    cast: 'Matthew McConaughey, Anne Hathaway, David Gyasi'
  },
  {
    title: 'The Big Lebowski',
    cast: 'Jeff Bridges, John Goodman, Steve Buscemi'
  },
  {
    title: 'Parasite',
    cast: 'Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Jang Hye-jin'
  },
  {
    title: 'Bang Boom Bang',
    cast: 'Oliver Korittke, Markus Knüfken, Ralf Richter, Sabine Kaack'
  },
  {
    title: 'Arizona Dream',
    cast: 'Johnny Depp, Jerry Lewis, Faye Dunaway, Lili Taylor'
  },
  {
    title: 'Forrest Gump',
    cast: 'Tom Hanks, Robin Wright, Gary Sinise'
  },
  {
    title: 'Rain Man',
    cast: 'Dustin Hoffman, Tom Cruise, Valeria Golino, Gerald R. Molen'
  },
];

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('welcome to movie api prototype');
});

app.use(express.static('public'));

app.get('/movies', (req, res) => {
  res.json(myTopTenMovies);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('something broke!');
});

app.listen(8080, () =>
  console.log('Your app is listening on port 8080.'));
  