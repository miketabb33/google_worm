# Google Worm

Google Worm is an application that uses the Google Books API to allow the user to search for books. The search results can include book title, author, publisher, pages, subject, a brief description, and external links. The user is able to load more results by scrolling to the bottom of the page. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
The application uses:
ruby 2.4.1,  
rails 5.2.2,  

### Installing
Start by navigating to the project in your command line.

Install the required gems with:
```
$ bundler install
```
If you dont have bundler installed then install bundler gem with:

```
$ gem install bundler
```

Now, run the server
```
$ rails server
```
After the server is running enter the following URL into a browser window:
```
http://localhost:3000/
```

### Or use the deployed application
Visit this link to use the app online:

```
https://google-worm.herokuapp.com/
```

## Running the tests

Unit tests are handled by Jasmine. To view the unit tests enter this URL while the server is running.
```
http://localhost:3000/specs
```

To run integration tests, enter the following in to the console:

```
$ cucumber
```
## Viewing the Code
The application code is located in:
```
app/assets/javascripts
```
Take a look at
```
app/assets/javascripts/application.js
```
to see how the code flows.
