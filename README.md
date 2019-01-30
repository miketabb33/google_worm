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
https://google-worm2.herokuapp.com/
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

## Approach

The goal of the Google Books API project was to make a professional grade search tool that handles all edge cases with feedback and provides intuitive navigation for the user. The first step was to make a search bar to pass a query to the ajax requests URL parameter. On success, the ajax request returned json containing an item array with multiple indexes which was ultimately used to render listings. In the early stages of the project I only pulled thumbnail, title, and author. This is were I came across a couple edge cases, some item array index properties in the json were undefined or the property didn't exist. This stopped the ajax request and returned an error. So I did a hasOwnProperty check followed by an if undefined check. At this point, the ajax request was able to handle properties that didn't exist or that were undefined. Simultaneously, I added error handling for the ajax request. This was pretty straight forward as I eventually added the common 403 error with feedback, 0 or 408 error(timeout error) with feedback, and an everything else error with feedback. I was able to find common errors by using the app. During the last 2 weeks I was also adding/modifying CSS, HTML, HTML item rendering for each json item result, a pagination feature which I decided to turned into an infinite scroll, and a suggestions feature.    

## Implimenting the review

This section of the readme is intended to cover the implementation of the code review.

### Removing the Cruft

The first goal was to remove the database and unnecessary directories from the application. This proved to be difficult as the config and directory changes worked locally but not when the app was deployed to heroku. The following code was modified in attempt remove the database: rails/all line in config/application was changed to outline specific frameworks (excluding active-record and active-storage), the sqlite3 gem and pg gem was removed from the gemfile, and every mention of active-storage and active-record was removed from the config/environments folder. Heroku returned a 503 error, there must have been some config option that was unable to be identified. After many attempts to fix the 503 error, the decision was made to create a new rails app without active-record, active-mailer, active-jobs, etc. and to bring in the code from the old app. This solved the 503 error. 

The old rails app was split into 2 repositories as I attempted to backtrack to an earlier commit point. The 2 old app repositories can be seen here https://github.com/miketabb33/google-worm and here https://github.com/miketabb33/google_worm.

### User Experiance Improvements

The next goal was to address each bullet in the user review could use improvement section.

1. There are some warnings in the console

The warnings in the console were caused by the ajax request loading http images in a https website, resulting in mixed content. To fix this, the json validation code for thumbnails has been modified to turn any http protocol to the https protocol before making the request.

2. Getting rate limited on almost every search because of the type-ahead requests.

As per console.developers' Google books API, the daily quota limit for this app is 1,000. There is also a 100 quota limit for every minute. The type-ahead search was fun to build but the decision was made to remove the feature because it added extra requests which caused a rate limit and interfered with the core purpose of the app.   

3. Errors in the console after deleting a query and typing a new one. 

I deleted a query and typed a new one many times and didn't see any errors in the console. Its worth noting that at this point other errors have been addressed, like fixing the warnings in the console and having removed the type-ahead search feature. These changes to the code may have fixed the seen error.

4. Errors are handled for the most part, but not user friendly

More information about each error has been added to make errors more user friendly. The additional error information comes from xhr and states the error code as well as a brief message of what caused the error.


### Code Review

With the cruft removed, the only remaining review bullet in the code review section was about testing.

* Some tests test implementation and not behavior

The main approach for my testing suites was to have unit tests and integration tests. The purpose of the unit test was to make sure that each simple function does what's intended. The integration test did a simple test check to make sure the the application was loading something from the API and rendering that something onto the page. With that said, I am new to testing. I have added more integration tests to expand behavior testing.

These tests can be executed by running cucumber in the console.

```
$ cucumber
```

### Other Additions

A partial response was added to only return JSON information that is pertinent to the app.

A Google key was added to each query so that app queries can be monitored.

![alt text](https://i.ibb.co/413y0rG/Screen-Shot-2019-01-28-at-9-23-19-PM.png)

### Questions to consider

The last part of this review covers questions to consider

* How would your application need to change if you wanted to save books to a bookshelf and manage it? What if you wanted to save your book search history?

##### Save to Bookshelf and Manage

The application can use Google books' my library feature to save books to the users bookshelf and manage it.

The application will need to use an OAuth 2.0 token to authenticate the user. Once the user is authenticated the application can be used to make changes to bookshelf. The OAuth 2.0 authentication token can be passed in the header of the AJAX request. 

All changes to the bookshelf will require an OAuth 2.0 authentication token.

##### To add a book to a shelf on the bookshelf use this link

``
https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/addVolume?volumeId=VOLUMEID
``

Each book has a unique ID associated with it know as the volume ID. Also, the 0 in the above URL indicates the shelf. Using different numbers will put the book on a different shelf. 0 is 'my favorites'. Some other shelf examples are 5 for 'reviewed' and 6 for 'recently viewed'.

##### To acquire JSON data of a users specific shelf use this link

``
https://www.googleapis.com/books/v1/mylibrary/bookshelves/SHELF/volumes
``

Changing SHELF will pull JSON data from that specific shelf

##### To acquire JSON data of a users entire bookshelf use this link

``
https://www.googleapis.com/books/v1/mylibrary/bookshelves
``

##### To remove a book from a bookshelf use this link

``
https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/removeVolume?volumeId=VOLUMEID
``

Lets cover implementation

To implement the ability to save books and manage them we must first have the user interact with OAuth 2.0 to acquire a token. The token can be saved in a session variable which can be used in the header of the above ajax requests. At this point the user can use features on the webpage that trigger the above links. An example of a feature is a button per listing that renders after a search that says something like "add to favorites". If clicked, the appropriate POST link is fired and the volume is added to the users Google books bookshelf under shelf '0', my favorites. Then the site can have a view my favorites page which displays all the volumes in the users 'my favorites' shelf. If this is clicked an ajax request will use the appropriate link to acquire JSON representing the users my favorites shelf and the information will be rendered into the DOM. Each listing can have a delete link which will use the appropriate link to remove the book from the users my favorites shelf. This pattern can be used for any shelf or the entire bookshelf. 

##### Save Book Search History
Following a link to books.google.com will automatically add the books to the users browsing history. However, this is not very effective because some volume links send the user to the play store and the search information will not be recorded. A solution to this is to incorporate an application database that can store the selfLink of every book that is clicked on. A view history page can be added to the website and it can pull all selfLink rows from the database and render each listing into the DOM.





