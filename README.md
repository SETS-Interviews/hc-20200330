# CLI App Assessment

A The Movie Database TMDb CLI Application:

Please refer to 'Issues' for your requirements.

*DEVELOPER CANDIDATE README NOTES GO HERE*

Directions for Terminal:

$ git clone https://github.com/SETS-Interviews/hc-20200330.git

$ cd hc-20200330

$ docker build --tag cli:1.0 .

$ docker run --publish 5000:5000 --name cli cli:1.0

Open New Terminal Window:

$ cli help

Shows list of commands 

cli [command] <options>
  movie <movie name>........... search movie to see who starred in the film
  actor <actor name>.............. search actor to find movies they starred in
  director <director name> ............search director to find movies they directed
  help............... show help menu for a command
  version ............... shows current version

*if Server errors 
$ npm install
$ cli help

Movie Search Example and Results:

$ cli movie About Time

Cast:
Domhnall Gleeson
Rachel McAdams
Bill Nighy
Lydia Wilson
Lindsay Duncan
Richard Cordery
Joshua McGuire
Tom Hollander
Margot Robbie
Will Merrick
Vanessa Kirby
Tom Hughes
Clemmie Dugdale
Harry Hadden-Paton
Mitchell Mullen
Lisa Eichhorn
Jenny Rainsford
Natasha Powell
Catherine Steadman
Tom Stourton
Sophie Brown
Molly Seymour
Tom Godwin
Philip Voss
Matilda Sturridge
Matthew C. Martino
Lee Asquith-Coe
Haruka Abe
Lee Nicholas Harris
Richard E. Grant
Richard Griffiths
Crew:
Nicky Kentish Barnes
Tim Bevan
Eric Fellner
Richard Curtis
Richard Curtis
Fiona Weir
Mark Day
Liz Griffiths
Sam Stokes
John Paul Kelly
John Guleserian
Nick Laird-Clowes


Example actor search and results:

$ cli actor Tom Hanks

Movies that match your search for Tom+Hanks

Cars
Toy Story 4
Forrest Gump
Saving Private Ryan
Toy Story
The Green Mile
Toy Story 3
Apollo 13
Inferno
Cast Away
The Da Vinci Code
Toy Story 2
Angels & Demons
A Beautiful Day in the Neighborhood
Catch Me If You Can
The Terminal
The Simpsons Movie
Sully
Captain Phillips
Cloud Atlas

Example of director search and results:

$ cli director Steven Spielberg

Movies that match your search for Steven+Spielberg

Indiana Jones and the Temple of Doom
Jaws
Austin Powers in Goldmember
The Blues Brothers
Paul
Back in Time
Empire of Dreams: The Story of the Star Wars Trilogy
Spielberg
Milius
Stanley Kubrick: A Life in Pictures
Score: A Film Music Documentary
And the Oscar Goes To...
The Cutting Edge: The Magic of Movie Editing
Drew: The Man Behind the Poster
Ray Harryhausen: Special Effects Titan
Everything Is Copy
Industrial Light & Magic: Creating the Impossible
Making Waves: The Art of Cinematic Sound
The Shark Is Still Working
Five Came Back

Unit Test Coverage Report can be found in ./coverage/index.html
