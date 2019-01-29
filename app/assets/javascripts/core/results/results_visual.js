function loadingPhraseHandler(resultsObj){
  if (resultsObj.counter === 0){
    $('#loading-more').html("Loading results...")
  }else{
    $('#loading-more').html("Loading more results...")
  }
}

function resultsSuccessVisualHandler(resultsObj){
  $('[data-toggle="tooltip"]').tooltip(); 
  $('#header').addClass('move-header');
  $("#error-msg").hide()
  $('#results-count-container').show()
  $('#total-count').html(resultsObj.total)
  $('#results-container').show()
}

function resultsErrorVisualHandler(xhr){
  $("#error-msg").css("display","block")
  errorMessageHandler(xhr)
}

function errorMessageHandler(xhr){
  if(xhr.status === 403){
    errorInfo = JSON.parse(xhr.responseText)
    console.log("Additional error information: ",errorInfo)
    $("#error-msg").html("Error "+xhr.status+": "+errorInfo.error.errors[0].reason+"<br>There have been to many requests. Please try again later")
  }else if(xhr.status === 408){
    $("#error-msg").html("Error "+xhr.status+":<br>Request has timed out<br><a href='https://www.lifewire.com/408-request-timeout-2622937' target='_blank'>Click here for more information</a>")
  }else{
    $("#error-msg").html("Loading Error, Please try again.<br> If this continues make sure you are connected to the internet<br>Error: "+xhr.status)
  }
}

function visualPageLoadingState(){
  $("#results-container").html("")
  $('#results-count-container').hide()
  $('#loading-more').hide()
}

function LoadingPhraseOnErrorHandler(resultsObj){
  if (resultsObj.error === false){
    $('#loading-more').show()
  }
}

