function runSearch(resultsObj){
  var search = document.getElementById('search-field').value
  if(search !== ""){
    
    loadingPhraseHandler(resultsObj)
    url = "https://www.googleapis.com/books/v1/volumes?q="
    url += search+"&startIndex="+resultsObj.startIndex+"&maxResults="+ resultsObj.perPage
    url += '&key=AIzaSyAsc5JqPrBK-ojHcB06PzsSlIeUc3lZy1E'
    url += '&fields=totalItems,items/volumeInfo(title,authors,publisher,publishedDate,'
    url +=   'imageLinks/thumbnail,pageCount,categories,industryIdentifiers,'
    url +=   'infoLink),items/searchInfo/textSnippet,items/accessInfo/webReaderLink'
    $.ajax({
      url: url,   
      beforeSend: function(){
        LoadingPhraseOnErrorHandler(resultsObj)
        resultsObj.error = false
      },
      success: function(result){ 
        $('#loading-more').show()
        resultsShowingSwitch(resultsObj, result)
        if (resultsObj.showing === false){
          $('#loading-more').html('No results for '+ search)
        }else{
          handleResponse(result, resultsObj)
          totalResultsSetter(result, resultsObj)
        }
        resultsSuccessVisualHandler(resultsObj)
      },
      error: function(xhr, ajaxOptions, thrownError){
        resultsObj.error = true
        resultsErrorVisualHandler(xhr)
        $('#loading-more').hide()
      },
      timeout: 4000
    });
    resultsCountIncrementor(resultsObj)
  }
}

//uid=6Y5QXJ-cAv7J0PEPqOKjwAY
