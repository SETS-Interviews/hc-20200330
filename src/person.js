import axios from 'axios';
import chalk from 'chalk';
import {searchForPerson} from './routes'

function validateActorName(name) {
    console.log(name._)
    if (name._.length!==2) {

      return false;
    }else{
    return true;
    }
  }

export function person(name){
    if (!validateActorName(name)){
        console.error(
            chalk.redBright(
              `Please enter the name of the movie you would like to search. It must not have spaces.  Example "Tom+Hanks"`
            )
          );
    }else{
        console.log(searchForPerson(name._[1]))
    }
}