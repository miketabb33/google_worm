//google_books_json fixture being used. book
//simple_objects fixture being used. suggestionsObj

describe('---SUGGESTIONS---', function(){

  describe('createSuggestionsList()', function(){
    it("Should push book.items[0].volumeInfo.title to suggestionsObj.current array", function(){
      suggestionsObj.count = 1
      createSuggestionsList(book, suggestionsObj)
      expect(suggestionsObj.current).toEqual(["The Pragmatic Programmer"])
    })
  })

  describe('currentSuggestionArraySetter()', function(){
    it("Should set suggestionsObj.current and suggestionsObj.unique to empty arrays", function(){
      suggestionsObj.current = ["8th light","8th light", "8th light", "quality software"]
      suggestionsObj.unique = ["8th light", "quality software"]
      currentSuggestionArraySetter(suggestionsObj)
      expect(suggestionsObj.current).toEqual([])
      expect(suggestionsObj.unique).toEqual([])
    })
  })

})