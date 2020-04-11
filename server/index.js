const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const axios = require('axios')
const baseURL = 'https://api.themoviedb.org/3/'
const apiKey = 'api_key=949bff8e08031ca57f596f86e7440dde'


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//returns all movies by most recent
app.get('/', (req, res) => {
    axios.get(`${baseURL}discover/movie?${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
    ).then(function (response) {
    //normalize movie results data
    // response.data.results = response.data.results.map(movie=>({[movie.id]: movie}))
      res.send(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  });


  //returns results for specific search
  app.get('/search', (req, res) => {
    console.log(req.query)
    //if user searched for a movie
    if (req.query.type === 'movie'){
        axios.get(`${baseURL}search/movie?${apiKey}&query=${req.query.search}`
        ).then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    //if user search people
    }else if (req.query.type === 'person'){
        //finds the persons ID number
        axios.get(`${baseURL}search/person?${apiKey}&query=${req.query.search}`
        ).then(function (response) {
            //if Id number is found requests all their movies
            axios.get(`${baseURL}discover/movie?${apiKey}&with_cast=${response.data.results[0].id}`
            ).then(function (response) {
                res.send(response.data)
            })
            .catch(function (error) {
              console.log(error);
            });  
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });

  //gets movie credits
  app.get('/:movieId', (req, res) => {
    //if user searched for a movie
    axios.get(`${baseURL}movie/${req.params.movieId}/credits?${apiKey}&language=en-US`
    ).then(function (response) {
        res.send(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
  })


// Server Setup
const port = 5000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
