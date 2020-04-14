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


  //returns results for movie search
  app.get('/movie', (req, res) => {
      //if search is empty, sends error
      if (req.query.search == undefined){
        res.status(404);
        return res.end(`Please enter a search term`)
      }
        //fetch to find all movies that match name
        axios.get(`${baseURL}search/movie?${apiKey}&query=${req.query.search}`
        ).then(function (response) {
            //if no movies match, sends error
            if (response.data.results.length == 0){
                res.status(404);
                return res.end(`Your request could be found.`);   
            }
            //sending id of the first results to recieve cast and crew information
            axios.get(`${baseURL}movie/${response.data.results[0].id}/credits?${apiKey}&language=en-US`
            ).then(function (response) {
                res.send(response.data)
            })
            //sends error if Id number is  not found
            .catch(function (error) {
                res.status(404);
                return res.end(`No movie with id number ${req.params.movieId} could be found.`);
            });
        })
        .catch(function (error) {
            res.status(404);
            return res.end(`Sorry, request could not be made. Please try again later.`);
        });
  })
    //search for actor or director
    app.get('/person', (req, res) => {
        //finds the persons ID number
        axios.get(`${baseURL}search/person?${apiKey}&query=${req.query.search}`
        ).then(function (response) {
            //if Id number is found requests all their movies
            axios.get(`${baseURL}discover/movie?${apiKey}&with_cast=${response.data.results[0].id}`
            ).then(function (response) {
                res.send(response.data)
            })
            .catch(function (error) {
                res.status(404);
                return res.end(`No movies with that actor were found.`);
            });  
        })
        .catch(function (error) {
            res.status(404);
            return res.end(`Person with the name ${req.query.search} could not be found`);
        });
    })

 

// Server Setup
const port = 5000;
const server = http.createServer(app);
server.listen(port);
console.log(port)
module.exports = { server }