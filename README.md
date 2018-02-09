# Project overview

Heroku - [https://sightseeings.herokuapp.com/sights](https://sightseeings.herokuapp.com/sights)

___

## Project description

Server web application Sightseeing Surfer help users to get known and keep a track with sightseeings at the spot where they are about to go and manage them(choose, store, delete or edit). Each user has his profile. Previous queries made by user to db stored into his profile always available for him on its interface.

___ 

## Evolution of the project 

MVP - completed
- Set up Node.js server,
- Set up Express.js,
- Create and configure a database 
- Build a user functionality (CRUD): choose all, choose one, update one, create one and delete
- Build up interface.

Version 1  - uncompleted
- connected external API Google Places.
- user authentication
- improved interface

___

## User story

- /about
> User comes into the site. See “about” static page. To start use site he is proposed to create his own account or log in to existing account. When authentication is passed a user passed to “user-search” screen.

- /user-search
> If user already has previously made requests and stored them under his profile all of them showed at the right part of the screen.
At the middle of the screen there is a big search window where he could type his request. At the same page user has an option to add his own item. For that purpose there is a button “add” new item at the upper part of the middle part of the screen.
At the left upper corner of the middle part of the screen there is a user icon/name

- /results
> This page is represented by results of user search. Results are placed at the middle part of the screen as icons-styled sightseeing matched with a short description. Each icon has button to be added to the user profile. This feature represent a shortcut way to add items. 
Other way to add item to user profile is to click on an icon and go to the item page.
Another elements on the page: user stored items in the right side of the screen, user icon or name at the left upper corner of the middle part of the screen, header and footer, search field at the top of the middle part of the screen.

- /place/:id
> This page has all same attribute from a page “result” except instead of icons at the middle of the screen there is window item with detailed description of the item. This window contains buttons “add”, which automatically add this item to the user profile.
Navigation on this page is represented by the following features: step backward to the previous founded item, step forward to the next founded item, comeback to the search results, make a new search.
Another elements on the page: user stored items in the right side of the screen, user icon or name at the left upper corner of the middle part of the screen, header and footer.

- /new
> This page appears when a user press a button “add” at the top of the screen. In the middle part of the screen there is a empty form of the item which user prompted to fill. Form field is: name of the sightseeing, description, name of the city, visited, picture(as a url link); 
At the bottom of the form user has options to submit form. After that it will be automatically added to his profile in case if a form was fully filled. User can dismiss all changes and leave the page. For that purpose there is button cancel. In this case he will be redirected to the /search.

- /id/edit 
> At the right part of the screen each of stored user’s item has two shortcut button: “edit” and “delete”.
When a user press “delete”  button, an item is automatically deleted from the user’s profile.
Pressing “edit button“ a user get this item at the middle part of the screen with fields ready to modify(name, description, city, visited status, picture). At the bottom of this window there is a button “submit” to store all amendments or “cancel” to “discard” all(In this case a user will be redirected to the /place/:id page). 

___

## Chartflow

![alt text](https://github.com/NovaXam/sightseeings/blob/master/assets/Architecture_v1.png "main chart")

![alt text](https://github.com/NovaXam/sightseeings/blob/master/assets/sightseeing%20surfer.png "user flow chart")

![alt text](https://github.com/NovaXam/sightseeings/blob/master/assets/front_page.png "main page")

![alt text](https://github.com/NovaXam/sightseeings/blob/master/assets/new_place.png "add new place")

![alt text](https://github.com/NovaXam/sightseeings/blob/master/assets/places.png "places")

___

## Production stages:

1. Planning: mockup, user story, architecture and pseudo-code - 16 hours
2. Back-end: build Node.js server using MVC pattern, build database, fill table with data - 8 hours
3. Front-end: HTML and CSS on base of “ejs” engine - 16 hours
4. Testing and bug fixing, deployment MVP - 12 hours
5. Improvement, testing and deployment version 1 - 16 hours
    - user authentication,
    - improved interface.

___

## Code Snippet

```
//PAGE SHOWING THE PLACES
<% include ../partials/header.ejs %>

<main>
    <% for (let sight of data) { %>
        <div class="seeing">
          <div class="sightHeader">
            <h1 style='font-size: 13px'><%= sight.name.toUpperCase() %></h1>
           <h3 style='color:rgb(166,178,42);font-family:Poppins;margin:3px;'><%= sight.city %></h3>
          </div>
      <a href='/sights/<%= sight.id %>' >
          <img class="picIcon" src="<%= sight.picture %>">
      </a>
          <div id="descList">
            <p style='font-family:arial'><%= sight.description.substring(0, 30) %> </p>
          </div>
          <input type="checkbox" name='status'> visited <br>
          <div id="buttons">
            <form class="sightsForm" action="sights/<%= sight.id %>/edit" method='GET'>
              <input type='Submit' value='Edit'>
            </form>
            <form class="sightsForm" method="POST" action="/sights/<%= sight.id %>?_method=Delete">
              <input type='Submit' value='delete'>
            </form>
          </div>
        </div>
    <% } %>
</main>

<% include ../partials/footer.ejs %>

//SERVER SIDE MIDDLEWARE

const Quote = require('../models/sightDB');

module.exports = {

  findAll(req, res, next) {
    Quote.findAll()
    .then(sights => {
      res.locals.sights = sights;
      next();
    }).catch(err => {
      console.log(err);
      next(err);
    });
  },

  findOne(req, res, next) {
    Quote.findById(req.params.id)
    .then(sight => {
      res.locals.sight = sight;
      next();
    }).catch(err => {
      console.log(err);
      next(err);
    });
  },

  update(req, res, next) {
    Quote.update(req.body)
    .then(() => {
      next();
    }).catch(err => {
      console.log(err);
      next(err);
    })
  },

  create(req, res, next) {
    Quote.create(req.body)
    .then(() => {
      next();
    }).catch(err => {
      console.log(err);
      next(err);
    })
  },

  destroy(req, res, next) {
    Quote.destroy(req.params.id)
    .then(() => {
      next();
    }).catch(err => {
      console.log(err);
      next(err);
    })
  }
}


```

