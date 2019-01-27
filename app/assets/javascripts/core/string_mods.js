function stringMaxLength(sentance, maxLength){
  if (sentance.length > maxLength){
    var newSentance = []
    sentance = sentance.split('')
    for (j = 0;j <= maxLength;j++){
      newSentance.push(sentance[j])
    }   
    return newSentance.join("") + '...'
  }else{
    return sentance
  }
}