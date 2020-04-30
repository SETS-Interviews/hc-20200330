import axios from 'axios';
import chalk from 'chalk';

//checks for empty search
function validateMovieName(movieName) {
    if (movieName._.length ==1) {
      return false;
    }else{
    return true;
    }
  }

export function movie(movieName){
   //if no search critera was entered gives warning
    if (!validateMovieName(movieName)){
        console.error(
            chalk.redBright(
              `Please enter the name of the movie you would like to search.`
            )
          );
    }else{
      //loop through search terms entered so it is a string with no spaces
      let searchTerm = ''
      for (let i = 1; i < movieName._.length; i++ ){
        if (i==1){
          searchTerm = searchTerm + movieName._[i]
        }else{
        searchTerm = searchTerm + '+' + movieName._[i]
        }
      }

      axios({
        method: 'get',
        url: `http://localhost:5000/movie?search=${searchTerm}`
      })
      //logs cast and crew names
      .then(function(response){
        console.log(chalk.greenBright('Cast:'))
        response.data.cast.map(member=>{console.log(member.name)})
        console.log(chalk.greenBright('Crew:'))
        response.data.crew.map(member=>{console.log(member.name)})
    })
    //if error sends error message
    .catch(function(error){
        console.log(chalk.redBright('Sorry, we could not find a movie to match your search.'))
    })
    }
}