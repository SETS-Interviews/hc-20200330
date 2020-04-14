import chalk from 'chalk';

//help command returns helpful menu with commands
const menus = {
  main: `
${chalk.greenBright('cli [command] <options>')}
  ${chalk.blueBright('movie <movie name>')} ........... search movie to see who starred in the film
  ${chalk.blueBright('actor <actor name>')}.............. search actor to find movies they starred in
  ${chalk.blueBright('director <director name>')} ............ search director to find movies they directed
  ${chalk.blueBright('help')} ............... show help menu for a command
  ${chalk.blueBright('version')} ............... shows current version
`
}

export async function help(args) {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]
  console.log(menus[subCmd] || menus.main)
}