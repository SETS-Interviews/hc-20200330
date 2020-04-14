import minimist from 'minimist';
import {movie} from './movie';
import {person} from './person';
import {version} from './version'
import {help} from './help'

export async function cli(argsArray) {
    const args = minimist(argsArray.slice(2));
    let cmd = args._[0] || 'help';
  
    if (args.version || args.v) {
      cmd = 'version';
    }
  
    if (args.help || args.h) {
      cmd = 'help';
    }
  
    switch (cmd) {
        case 'version':
            version(args);
            break;

        case 'help':
            help(args);
            break;
  
      case 'movie':
        movie(args);
        break;

        case 'actor':
            person(args);
            break;
        
        case 'director':
            person(args);
            break;
  
      default:
        console.error(`"${cmd}" is not a valid command!`);
        break;
    }
  }