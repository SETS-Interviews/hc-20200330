import axios from "axios";
import { FETCH_MOVIES} from './types';

export const fetchAllMovies = () => dispatch => {
  console.log('I fetched movies')
  axios.get(`http://localhost:5000`
  ).then(function (response) {
    console.log('fetch all movies', response)
    dispatch({ type: FETCH_MOVIES, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

  export const fetchMovies = (query) => dispatch => {
    axios.get('http://localhost:5000/movie/search'
    ).then(function (response) {
      dispatch({ type: FETCH_MOVIES, payload: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  };



 

 

 