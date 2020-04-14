import axios from 'axios';
const baseURL = 'https://api.themoviedb.org/3/'
const apiKey = 'api_key=949bff8e08031ca57f596f86e7440dde'

export function searchForMovie(movieName) {
  //initial call to find movie ID#
  axios({
    method: 'get',
    url: `${baseURL}search/movie?${apiKey}&query=${movieName}`
  })
    //if the response is an empty array, returns error message
  .then(function (response) {
    if (response.data.results.length==0){
        return console.log('Sorry, we could not find any movie to match your search.')
    //if movies are found, make second call to get movie credits for first movie results
    }else{
        axios({
        method: 'get',
        url: `${baseURL}movie/${response.data.results[0].id}/credits?${apiKey}&language=en-US`
    })
    //if second call is 200, logs cast members names and crew members name
    .then(function(response){
        console.log('Cast:')
        response.data.cast.map(member=>{console.log(member.name)})
        console.log('Crew:')
        response.data.crew.map(member=>{console.log(member.name)})
    })
    //if error sends error message
    .catch(function(error){
        console.log('Sorry, we could not find any movie to match your search.')
    })
    }
//if error sends error message
}).catch(function(error){
    console.log('Sorry, we could not find any movie to match your search.')
    })
}

export function searchForPerson(name) {
//initial call to find actor or directors id number
  axios({
      method: 'get',
      url: `${baseURL}search/person?${apiKey}&query=${name}`
    })
    //if id number is found, makes second call to find movies
    .then(function (response) {
        //if Id number is found requests all their movies
        axios({
        method: 'get',
        url:`${baseURL}discover/movie?${apiKey}&with_cast=${response.data.results[0].id}`
    //if second call is found, logs movie names
  })
  .then (function(response){
      response.data.results.map(movie=>{console.log(movie.title)})
  })
    //if response is an error it lets user know they could not find person
  .catch(function(error){
    console.log('Sorry, we could not find any person who match your search.')
  })
})
//if response is an error it lets user know they could not find person
.catch(function(error){
    console.log('Sorry, we could not find any person who match your search.')
})
}
