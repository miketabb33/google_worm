function validateTitle(item){ 
  if(item.volumeInfo && item.volumeInfo.title && item.volumeInfo.title !== undefined){
    return item.volumeInfo.title
  }else{
    return "Unkown Title"
  }
}

function validateAuthors(item, itemObj, resultsObj){
  if(item.volumeInfo && item.volumeInfo.authors && item.volumeInfo.authors !== undefined){
    itemObj.author = stringMaxLength(item.volumeInfo.authors.join(', '),resultsObj.authorCharLength)
  }else{
    itemObj.author = "an unkown author"
  }
}

function validatesThumbnail(item, itemObj){
  if(item.volumeInfo && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail && item.volumeInfo.imageLinks.thumbnail !== undefined){
    link = item.volumeInfo.imageLinks.thumbnail
    if(link.substring(0,4) === 'http' && link.substring(4,5) !== 's') {
      protocol = link.substring(0,4)
      url = link.substring(4, link.length)
      itemObj.thumbnail = protocol+'s'+ url
    }else{
      itemObj.thumbnail = link
    }

  }else{
    itemObj.thumbnail = "https://i.ibb.co/mTrb5b2/no-cover-thumb.gif"
  }
}

function validatesPublisher(item, itemObj, resultsObj){
  if(item.volumeInfo && item.volumeInfo.publisher && item.volumeInfo.publisher !== undefined){
    itemObj.publisher = stringMaxLength(item.volumeInfo.publisher,resultsObj.publisherCharLength)
  }else{
    itemObj.publisher = "an unkown publisher"
  }
}

function validatesPublishYear(item, itemObj){
  if(item.volumeInfo && item.volumeInfo.publishedDate && item.volumeInfo.publishedDate !== undefined){
    itemObj.publishYear = ' - '+item.volumeInfo.publishedDate.substring(0, 4)
  }else{
    itemObj.publishYear = ''
  }
}

function validatesPageCount(item, itemObj){
  if(item.volumeInfo && item.volumeInfo.pageCount && item.volumeInfo.pageCount !== undefined){
    itemObj.pageCount = item.volumeInfo.pageCount + ' pages'
  }else{
    itemObj.pageCount = ""
  }
}

function validatesSubtext(item, itemObj){
  if(item.searchInfo && item.searchInfo.textSnippet && item.searchInfo.textSnippet !== undefined){
    itemObj.subtext = item.searchInfo.textSnippet
  }else{
    itemObj.subtext = ''
  }
}

function validatesSubject(item, itemObj){
  if(item.volumeInfo && item.volumeInfo.categories && item.volumeInfo.categories !== undefined){
    itemObj.subject = item.volumeInfo.categories[0]
  }else{
    itemObj.subject = ''
  }
}

function validatesLink(item, itemObj){
  if(item.volumeInfo && item.volumeInfo.infoLink && item.volumeInfo.infoLink !== undefined){
    itemObj.linkClosingTag = '</a>'
    itemObj.linkClosingTagLongTitle = '</a>'
    itemObj.linkThumbnail = '<a href="'+item.volumeInfo.infoLink+'"target="_blank">'
    itemObj.linkLongTitle = '<a href="'+item.volumeInfo.infoLink+'"target="_blank" class="no-decoration" data-toggle="tooltip" data-placement="top" title="'+item.volumeInfo.title+'">'
    itemObj.linkShortTitle = '<a href="'+item.volumeInfo.infoLink+'"target="_blank" class="no-decoration">'
    itemObj.moreInfo = '<a href="'+item.volumeInfo.infoLink+'"target="_blank" class="link-list-item">More Info</a>'
  }else{
    itemObj.linkClosingTag = ''
    itemObj.linkClosingTagLongTitle = '</span>'
    itemObj.linkThumbnail = ''
    itemObj.linkLongTitle = '<span data-toggle="tooltip" data-placement="top" title="'+item.volumeInfo.title+'">'
    itemObj.linkShortTitle = ''
    itemObj.moreInfo = ''
  }
}

function validatesAmazon(item, itemObj){
  if(item.volumeInfo && item.volumeInfo.industryIdentifiers && item.volumeInfo.industryIdentifiers !== undefined){
    code = getISBN13Link(item)
    if(code !== ''){
      itemObj.amazon = '<a href="https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords='+code+'" target="_blank" class="link-list-item">Amazon</a>'
    }else{
      itemObj.amazon = ''
    }
  }else{
    itemObj.amazon = ''
  }
}

function validatesPreviewLink(item, itemObj){
  if(item.accessInfo && item.accessInfo.webReaderLink && item.accessInfo.webReaderLink !== undefined && item.accessInfo.accessViewStatus !== 'NONE'){
    itemObj.previewLink = '<a href="'+item.accessInfo.webReaderLink+'"target="_blank" class="link-list-item">Preview</a>'
  }else{
    itemObj.previewLink = ''
  }
}

function getISBN13Link(item){
  industryCodes = item.volumeInfo.industryIdentifiers
  for (j = 0; j< industryCodes.length; j++){
    if (industryCodes[j].type === "ISBN_13"){
      return industryCodes[j].identifier
    }
  }
  return ''
}




