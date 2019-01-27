function renderResultItemHTML(itemObj, resultsObj){
  var content = ""
  content = '<div class="listing">' 
  content +=  '<div class="row">'
  content +=    '<div class="book-img-container col-lg-2">'
  content +=      itemObj.linkThumbnail
  content +=        '<img class="img" src='+itemObj.thumbnail+'alt="'+itemObj.title+' photo">'
  content +=      itemObj.linkClosingTag
  content +=    '</div>'
  content +=    '<div class="listing-info-container offset-lg-1 col-lg-9">'
  if(itemObj.rawTitle.length > resultsObj.titleCharLength){
    content +=    itemObj.linkLongTitle
    content +=      '<div class="title">' + itemObj.title +'</div> '
    content +=    itemObj.linkClosingTagLongTitle
  }else{
    content +=    itemObj.linkShortTitle
    content +=      '<div class="title">' + itemObj.title +'</div> '
    content +=    itemObj.linkClosingTag
  }
  content +=    '<div class="listing-gray">Book by ' + itemObj.author +'</div>'
  content +=    '<div class="listing-gray">Published by ' + itemObj.publisher +itemObj.publishYear +'</div>'
  content +=    '<div class="listing-gray">' + itemObj.pageCount +'</div>'  
  content +=    '<div class="listing-gray">' + itemObj.subject +'</div>'  
  content +=    '<div class="subtitle">' + itemObj.subtext +'</div>'
  content +=    itemObj.linkListHTML
  content +=   '</div>'
  content +=  '</div>'
  content += '</div>'
  $("#results-container").append(content) 
}