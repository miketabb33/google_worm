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
  for (i = 0; i< suggestionsObj.count; i++){
    item = stringMaxLength(result.items[i].volumeInfo.title,suggestionsObj.charLength)
    suggestionsObj.current.push(item)
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