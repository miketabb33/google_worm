//google_books_json fixture being used. book
//simple_objects fixture being used. results and resultsObj

describe('---RESULTS---', function(){

  describe('resultsShowingSwitch()', function(){
    it("Should set resultsObj.showing to 'true' if book.items is not 'undefined'", function(){
      resultsObj.showing = false
      resultsShowingSwitch(resultsObj, book)
      expect(resultsObj.showing).toEqual(true)
    })

    it("Shouldn't change resultsObj.showing to 'true' if results.items is 'undefined", function(){ 
      resultsObj.showing = false
      results.items = undefined
      resultsShowingSwitch(resultsObj, results)
      expect(resultsObj.showing).toEqual(false)
    })
  })

  describe('totalResultsSetter()',function(){
    it("should set resultsObj.total to result.totalItems if resultsObj.total equals '0'", function(){
      resultsObj.total = 0
      totalResultsSetter(book, resultsObj)
      expect(resultsObj.total).toBe(1363)
    })

    it("shouldn't change resultsObj.total if resultsObj.total is more than '0'", function(){
      resultsObj.total = 2000
      totalResultsSetter(book, resultsObj)
      expect(resultsObj.total).toBe(2000)
    })
  })

  describe('resetSearchConditions()', function(){
    it("Should set results.startIndex, results.total, and results.counter to '0'", function(){
      results.startIndex = 60
      results.total = 2354
      results.counter = 3
      resetSearchConditions(results)
      expect(results.startIndex).toEqual(0)
      expect(results.total).toEqual(0)
      expect(results.counter).toEqual(0)
    })
  })

  describe('resultsCountIncrementor()', function(){
    it("Should increment resultsObj.counter by '1'", function(){
      resultsObj.counter = 5
      resultsCountIncrementor(resultsObj)
      expect(resultsObj.counter).toEqual(6)
    })
  })

  describe('currentIndexIncrementor()', function(){
    it("Should increment resultsObj.startIndex by resultsObj.perPage if resultsObj.counter doesnt equal '0'", function(){
      resultsObj.counter = 5
      resultsObj.startIndex = 20
      resultsObj.perPage = 20
      currentIndexIncrementor(resultsObj)
      expect(resultsObj.startIndex).toEqual(40)
    })

    it("Should not increment resultsObj.startIndex by resultsObj.perPage if resultsObj.counter equals '0'", function(){
      resultsObj.counter = 0
      resultsObj.startIndex = 0
      resultsObj.perPage = 20
      currentIndexIncrementor(resultsObj)
      expect(resultsObj.startIndex).toEqual(0)
    })
  })

  describe('createLinkList()', function(){
    it("Should return an empty string if all arguments are empty strings", function(){
      amazon = ''
      preview = ''
      moreInfo = ''
      value = createLinkList(amazon, preview, moreInfo)
      expect(value).toEqual("")
    })

    it("Should return a single anchor tag if only one argument is not an empty string", function(){
      amazon = ''
      preview = '<a href="Im_A_Link"target="_blank" class="link-list-item">Preview</a>'
      moreInfo = ''
      value = createLinkList(amazon, preview, moreInfo)
      expect(value).toEqual('<a href="Im_A_Link"target="_blank" class="link-list-item">Preview</a>')
    })

    it("Should return all 3 anchor tags with '|' inbetween if all 3 arguments are not empty strings", function(){
      amazon = '<a href="https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=Im_An_Industry_Code" target="_blank" class="link-list-item">Amazon</a>'
      preview = '<a href="Im_A_Link"target="_blank" class="link-list-item">Preview</a>'
      moreInfo = '<a href="Im_A_Link"target="_blank" class="link-list-item">More Info</a>'
      value = createLinkList(amazon, preview, moreInfo)
      expect(value).toEqual('<a href="https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=Im_An_Industry_Code" target="_blank" class="link-list-item">Amazon</a> | <a href="Im_A_Link"target="_blank" class="link-list-item">Preview</a> | <a href="Im_A_Link"target="_blank" class="link-list-item">More Info</a>')   
    })

  })


})