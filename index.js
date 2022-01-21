require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const {
  movies,
  actionMovies,
  newMovies,
  getMovie,
} = require("./controllers/movies");
const {
  tvShows,
  actionTvShows,
  newTvShows,
  getTvShow,
  getTvShowEpisode,
  getTvShowSeason,
} = require("./controllers/tvShows");

//1) all movies route

app.get("/movies", movies);

//2) new movies route

app.get("/new-movies", newMovies);

//3) action movies route

app.get("/action-movies", actionMovies);

//4) find movie by ID

app.get("/movie/:id", getMovie);

// params ==> /:id

// queries ==> ?id=1234

//1) all TV-SHOWS
app.get("/tv-shows", tvShows);

//2) all ACTION TV-SHOWS
app.get("/actionTvShows", actionTvShows);

//3) new TV-SHOWS
app.get("/newTvShows", newTvShows);

//4) find TV-Show by id
/**
 req.params={
   tvShowId: abc
 }
 */
app.get("/tv-show/:tvShowId", getTvShow);

//5)find EPISODE by id => /:id

app.get("/tv-show-episode/:tvShowId/:seasonId/:episodeId", getTvShowEpisode);

app.get("/tv-show-season/:tvShowId/:seasonId", getTvShowSeason);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
