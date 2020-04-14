import axios from 'axios';
import chalk from 'chalk';

//checks to see if search term was entered
function validateActorName(name) {
    if (name._.length==1) {
      return false;
    }else{
    return true;
    }
  }

export function person(name){
  //if no name was enter, gives user warning
    if (!validateActorName(name)){
        console.error(
            chalk.redBright(
              `Please enter the name of the movie you would like to search.`
            )
          );
    }else{
      //loop through search terms entered so it is a string with no spaces
      let searchTerm = ''
      for (let i = 1; i < name._.length; i++ ){
        if (i==1){
          searchTerm = searchTerm + name._[i]
        }else{
        searchTerm = searchTerm + '+' + name._[i]
        }
      }

      axios({
        method: 'get',
        url: `http://localhost:5000/person?search=${searchTerm}`
      })
      //logs all movies that person was apart of
      .then(function(response){
        console.log(chalk.greenBright(`Movies that match your search for ${searchTerm}`))
        response.data.results.map(movie=>{console.log(movie.title)})
    })
    //if error sends error message
    .catch(function(error){
        console.log(chalk.redBright('Sorry, we could not find any person that match your search.'))
    })
    }
}