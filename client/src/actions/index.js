import axios from "axios";
import { FETCH_MOVIES} from './types';

//Asks for list of all movies
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

//Asks for specific search of person or movie
  export const fetchSearch = (type, query) => dispatch => {
    axios.get(`http://localhost:5000/search?type=${type}&search=${query}`
    ).then(function (response) {
      console.log('response from fetchSearch', response)
      dispatch({ type: FETCH_MOVIES, payload: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  };



 

 

 