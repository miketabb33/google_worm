function handleSuggestions(result, search, suggestionsObj, resultsObj){
  currentSuggestionArraySetter(suggestionsObj)
  showSuggestions()
  renderFirstSuggestionHTML(search)
  createSuggestionsList(result, suggestionsObj)
  createUniqueSuggestionsList(suggestionsObj)
  applyUniqueSuggestionsListToScreen(suggestionsObj)
  clickableSuggestions(resultsObj)
}

function createSuggestionsList(result, suggestionsObj){
  if(result.items !== undefined){
    arr = []
    for (j=0;j<result.items.length;j++){
      arr.push(result.items[j])
    }
    if(arr.length> suggestionsObj.count){
      arr = arr.slice(0,suggestionsObj.count)
    }
    console.log(arr)
    for (i = 0; i< arr.length; i++){
      item = stringMaxLength(arr[i].volumeInfo.title,suggestionsObj.charLength)
      suggestionsObj.current.push(item)
    }
  }
}

function createUniqueSuggestionsList(suggestionsObj){
  $.each(suggestionsObj.current, function(i, el){
    if($.inArray(el, suggestionsObj.unique) === -1) suggestionsObj.unique.push(el);
  });
}

function currentSuggestionArraySetter(suggestionsObj){
  suggestionsObj.current = []
  suggestionsObj.unique = []
}