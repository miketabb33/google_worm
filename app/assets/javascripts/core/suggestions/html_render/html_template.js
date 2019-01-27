function renderFirstSuggestionHTML(search){
  var firstSuggestedSearch= ""
  firstSuggestedSearch += '<div class="suggestedItem">'
  firstSuggestedSearch +=   '<i class="fas fa-search suggestIcon"></i>'
  firstSuggestedSearch +=   '<span class="suggestedText">'
  firstSuggestedSearch +=     search
  firstSuggestedSearch +=   '</span>'
  firstSuggestedSearch +=   '<span id="your-search-suggestion">'
  firstSuggestedSearch +=     ' - your search'
  firstSuggestedSearch +=   '</span>'
  firstSuggestedSearch += '</div>'
  $('#suggestions').append(firstSuggestedSearch)
}