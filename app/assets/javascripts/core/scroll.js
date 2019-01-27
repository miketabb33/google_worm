function toTopBtn(){
  if ($(window).scrollTop() >= 2000){
    $('#toTopBtn').fadeIn()
  }else{
    $('#toTopBtn').fadeOut()
  }
}

function loadMoreResults(results){
  if($(window).scrollTop() + $(window).height() == $(document).height() && results.showing) {
    runSearch(results)
  }
}

function scrollToTheTop(){
  $("html, body").animate({ scrollTop: 0 }, "slow");
}