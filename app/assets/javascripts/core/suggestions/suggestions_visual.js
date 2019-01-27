function showSuggestions(){
  $('#suggestions').html("")
  $('#suggestions').show()
}

function clickableSuggestions(resultsObj){
  $('.suggestedItem').on('click', function(){
    document.getElementById('search-field').value = $(this).children(".suggestedText").text()
    visualPageLoadingState()
    runSearch(resultsObj)
  })
}

function applyUniqueSuggestionsListToScreen(suggestionsObj){
  $.each(suggestionsObj.unique, function(i,el){
    $('#suggestions').append('<div class="suggestedItem"><i class="fas fa-search suggestIcon"></i><span class=suggestedText>'+el+'</span></div>')  
  })
}