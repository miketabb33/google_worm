function handleResponse(response, resultsObj) {
  var itemObj = {}
  if (!response.hasOwnProperty('items')){
    $('#loading-more').html("No more results<br>Perform another search by clicking 'Back to top' and make another query.")
  }else{
    currentIndexIncrementor(resultsObj)
    for (var i = 0; i < response.items.length; i++) {
      var item = response.items[i];
      
      itemObj.rawTitle = validateTitle(item)
      itemObj.title = stringMaxLength(itemObj.rawTitle,resultsObj.titleCharLength)
      validateAuthors(item, itemObj, resultsObj)
      validatesThumbnail(item, itemObj)
      validatesPublisher(item, itemObj, resultsObj)
      validatesPublishYear(item, itemObj)
      validatesPageCount(item, itemObj)
      validatesSubtext(item, itemObj)
      validatesSubject(item, itemObj)
      validatesLink(item, itemObj)
      validatesAmazon(item, itemObj)
      validatesPreviewLink(item, itemObj)
      itemObj.linkListHTML = createLinkList(itemObj.amazon, itemObj.previewLink, itemObj.moreInfo)

      renderResultItemHTML(itemObj, resultsObj)
    }
  }
}

function resultsShowingSwitch(resultsObj){
  if (resultsObj.showing === false){
    resultsObj.showing = true
  }
}
 
function totalResultsSetter(result, resultsObj){
  if(resultsObj.total === 0){
    resultsObj.total = result.totalItems
  }
}

function resetSearchConditions(results){
  results.startIndex = 0
  results.total = 0
  results.counter = 0
}

function resultsCountIncrementor(resultsObj){
  resultsObj.counter += 1
}

function currentIndexIncrementor(resultsObj){
  if (resultsObj.counter !== 0){
    resultsObj.startIndex += resultsObj.perPage
  }
}

function pressEnterKey(event, results){
  if (event.keyCode === 13) {
    resetSearchConditions(results)
    visualPageLoadingState()
    runSearch(results)
    $('#search-field').blur()
  }
}

function createLinkList(amazon, preview, moreInfo){
  var filteredArr = []
  var arr = [amazon,preview, moreInfo]
  for(j = 0; j< arr.length; j++){
    if(arr[j] !== ''){
      filteredArr.push(arr[j])
    }
  }
  return filteredArr.join(' | ')
}

