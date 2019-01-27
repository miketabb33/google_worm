function shells(results, suggestions){

  $('#search-button').on("click", function(){
    resetSearchConditions(results)
    visualPageLoadingState()
    runSearch(results)
  })

  $('#search-field').on("keyup", function(event){
    runSuggestions(suggestions, results)
    pressEnterKey(event, results)
  });

  $(document).on('click', '#toTopBtn', function(){ 
    scrollToTheTop()
  })

  $(window).scroll(function() {
    $('#suggestions').hide()
    toTopBtn()
    loadMoreResults(results)
  });

}