import axios from 'axios';
import chalk from 'chalk';
import {searchForMovie} from './routes'

function validateMovieName(movieName) {
    console.log(movieName._)
    if (movieName._.length!==2) {

      return false;
    }else{
    return true;
    }
  }

export function movie(movieName){
    if (!validateMovieName(movieName)){
        console.error(
            chalk.redBright(
              `Please enter the name of the movie you would like to search. It must not have spaces.  Example "Toy+Story"`
            )
          );
    }else{
        console.log(searchForMovie(movieName._[1]))
    }
}