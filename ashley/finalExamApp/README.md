# 301 Final Exam

## You have been hired to create application that has the following features

### Before you begin

- Install your dependencies
- Build your server to start on port 3002

### As a user, I want to be able to easily see a list of Pokemon characters in alphabetic order

  1. Gather Pokemon information from the [PokiApi](https://pokeapi.co/).
  1. Sort the Pokemon in alphabetical order by name.
  1. Display the name of each Pokemon on the show.ejs view.
  1. Render this on the `/` route.
  
### As a user, I want to be able to save my favorite Pokemon so that I can come back later and find them

  1. Put each Pokemon result from the API inside of a `<form>` element with an action of `/add`.

- Make sure that there is a button inside of that `<form>` with the text "Add to Favorites".
- Place the name of each character inside of the `<form>` in an `<h2>` as well as a hidden `<input>` tag. The structure should look like this:

    ```html
    <form action="/add">
      <h2></h2>
      <input></input>
      <button>Add to Favorites</button>
    </form>
    ```

  1. When a user clicks on the "Add to Favorites" button, your application should save that Pokemon in the database and redirect them back to the `/` route.

### As a user, I want to be able to see my favorite Pokemon

  1. When the user visits the `/favorites` route, a list of their favorite saved Pokemon from the database will render to the favorites.ejs page.
    1. Create this list by putting each name in an `<li>` tag in the favorites.ejs page.

### As a user, I want this information to be displayed in a way that is aesthetically pleasing

  1. Extra Credit: Style this site using either grid or flex. Be creative but make it look good. 

## To Run The Tests

  1. Start with an empty database table
  1. Start your server using `npm start`
  1. In another terminal shell run the command: `npm test`
