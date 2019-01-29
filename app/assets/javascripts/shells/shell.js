function shells(results){

  $('#search-button').on("click", function(){
    results.showing = false
    resetSearchConditions(results)
    visualPageLoadingState()
    runSearch(results)
  })

  $('#search-field').on("keyup", function(event){
    pressEnterKey(event, results)
  });

  $(document).on('click', '#toTopBtn', function(){ 
    scrollToTheTop()
  })

  $(window).scroll(function() {
    toTopBtn()
    loadMoreResults(results)
  });

}