const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const axios = require('axios')



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//returns all movies by most recent
app.get('/', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=949bff8e08031ca57f596f86e7440dde&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
    ).then(function (response) {
    //normalize movie results data
    // response.data.results = response.data.results.map(movie=>({[movie.id]: movie}))
      res.send(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  });

  //*****currently hard coded***** returns results for specific movie search
  app.get('/movie/search', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=949bff8e08031ca57f596f86e7440dde&query=Jaws`
    ).then(function (response) {
      console.log(response.data.results)
    })
    .catch(function (error) {
      console.log(error);
    });
  });


//search for specific persons movies
//search person https://api.themoviedb.org/3/search/person?api_key=949bff8e08031ca57f596f86e7440dde&query=bruce+willis 
//then search for movies with that person http://api.themoviedb.org/3/discover/movie?api_key=949bff8e08031ca57f596f86e7440dde&with_cast=62
// different way to search same thing https://api.themoviedb.org/3/person/31?api_key=949bff8e08031ca57f596f86e7440dde&append_to_response=credits

// Server Setup
const port = 5000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
