function runSearch(resultsObj){
  var search = document.getElementById('search-field').value
  if(search !== ""){
    
    loadingPhraseHandler(resultsObj)
    url = "https://www.googleapis.com/books/v1/volumes?q="
    url += search+"&startIndex="+resultsObj.startIndex+"&maxResults="+ resultsObj.perPage
    url += '&key=AIzaSyAsc5JqPrBK-ojHcB06PzsSlIeUc3lZy1E'
    url += '&fields=items(volumeInfo/title,volumeInfo/authors,volumeInfo/publisher,'
    url +=   'volumeInfo/publishedDate,volumeInfo/imageLinks/thumbnail,volumeInfo/pageCount,'
    url +=   'volumeInfo/categories,volumeInfo/industryIdentifiers,'
    url +=   'volumeInfo/infoLink,searchInfo/textSnippet,accessInfo/webReaderLink)'
    $.ajax({
      url: url,   
      beforeSend: function(){
        LoadingPhraseOnErrorHandler(resultsObj)
        resultsObj.error = false
      },
      success: function(result){ 
        $('#loading-more').show()
        handleResponse(result, resultsObj)
        totalResultsSetter(result, resultsObj)
        resultsShowingSwitch(resultsObj)
        resultsSuccessVisualHandler(resultsObj)
      },
      error: function(xhr, ajaxOptions, thrownError){
        resultsObj.error = true
        resultsErrorVisualHandler(xhr)
        $('#loading-more').hide()
      },
      timeout: 3000
    });
    resultsCountIncrementor(resultsObj)
  }
}

function runSuggestions(suggestionsObj, resultsObj){
  var search = document.getElementById('search-field').value
  if(search !== ""){
    $.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q="+ search,
      success: function(result){
        handleSuggestions(result, search, suggestionsObj, resultsObj)
      }
    });
  }else{
    $('#suggestions').hide()
  }
}