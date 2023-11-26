const express = require("express");

const app = express();

const port = 5001;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const welcome = (req, res) => {
  res.send("Welcome to my favorite movie list");
};

const getMovies = (req, res) => {
  res.status(200).json(movies);
};

const movieId = (req, res) => {
  const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
  movie ? res.status(200).json(movie) : res.status(404).send("Not Found");
};

app.get("/", welcome);
app.get("/api/movies", getMovies);
app.get("/api/movies/:id", movieId);

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
