$(document).ready(function(){

  var results = {
    perPage: 20,
    total: 0,
    startIndex: 0,
    titleCharLength: 50,
    authorCharLength: 60,
    publisherCharLength: 60,
    showing: false,
    error: false,
    counter: 0
  }

  shells(results)
})