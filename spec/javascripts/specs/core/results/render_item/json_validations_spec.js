//This file is using fixtures
describe('---JSON VALIDATIONS---', function(){
  
  describe('validateTitle()', function(){
    it("Should return modified item.volumeInfo.title if property 'exists' and is not 'undefined'", function(){
      title = validateTitle(item)
      expect(title).toEqual("The Pragmatic Programmer")
    })

    it("Should return 'Unkown Title' if property 'exists' but is 'undefined'", function(){
      item.volumeInfo.title = undefined
      title = validateTitle(item)
      expect(title).toEqual("Unkown Title")
      item.volumeInfo.title = "The Pragmatic Programmer"
    })

    it("Should return 'Unkown Title' if property dosent 'exists'", function(){
      delete item.volumeInfo.title
      title = validateTitle(item)
      expect(title).toEqual("Unkown Title")
      item.volumeInfo.title = "The Pragmatic Programmer"
    })
  })

  describe('validateAuthors()', function(){
    it("Should return modified item.volumeInfo.authors if property 'exists' and is not 'undefined'", function(){
      validateAuthors(item, itemObj, resultsObj)
      expect(itemObj.author).toEqual("Andrew Hunt, David Thomas")
    })

    it("Should return 'an unkown author' if property 'exists' but is 'undefined'", function(){
      item.volumeInfo.authors = undefined
      validateAuthors(item, itemObj, resultsObj)
      expect(itemObj.author).toEqual("an unkown author")
      item.volumeInfo.authors = ["Andrew Hunt", "David Thomas"]
    })

    it("Should return 'an unkown author' if property dosent 'exists'", function(){
      delete item.volumeInfo.authors
      validateAuthors(item, itemObj, resultsObj)
      expect(itemObj.author).toEqual("an unkown author")
      item.volumeInfo.authors = ["Andrew Hunt", "David Thomas"]
    })
  })

  describe('validatesThumbnail()', function(){
    it("Should return item.volumeInfo.imageLinks.thumbnail if property 'exists' and is not 'undefined'", function(){
      validatesThumbnail(item, itemObj)
      expect(itemObj.thumbnail).toEqual("https://books.google.com/books/content?id=5wBQEp6ruIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api")
    })

    it("Should return a generic thumbnail if property 'exists' but is 'undefined'", function(){
      item.volumeInfo.imageLinks.thumbnail = undefined
      validatesThumbnail(item, itemObj)
      expect(itemObj.thumbnail).toEqual("https://i.ibb.co/mTrb5b2/no-cover-thumb.gif")
      item.volumeInfo.imageLinks.thumbnail = "http://books.google.com/books/content?id=5wBQEp6ruIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    })

    it("Should return a generic thumbnail if property dosent 'exists'", function(){
      delete item.volumeInfo.imageLinks.thumbnail
      validatesThumbnail(item, itemObj)
      expect(itemObj.thumbnail).toEqual("https://i.ibb.co/mTrb5b2/no-cover-thumb.gif")
      item.volumeInfo.imageLinks.thumbnail = "http://books.google.com/books/content?id=5wBQEp6ruIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    })
  })

  describe('validatesPublisher()', function(){
    it("Should return modified item.volumeInfo.publisher if property 'exists' and is not 'undefined'", function(){
      validatesPublisher(item, itemObj, resultsObj)
      expect(itemObj.publisher).toEqual("Addison-Wesley Professional")
    })

    it("Should return 'an unkown publisher' if property 'exists' but is 'undefined'", function(){
      item.volumeInfo.publisher = undefined
      validatesPublisher(item, itemObj, resultsObj)
      expect(itemObj.publisher).toEqual("an unkown publisher")
      item.volumeInfo.publisher = "Addison-Wesley Professional"
    })

    it("Should return 'an unkown publisher' if property dosent 'exists'", function(){
      delete item.volumeInfo.publisher
      validatesPublisher(item, itemObj, resultsObj)
      expect(itemObj.publisher).toEqual("an unkown publisher")
      item.volumeInfo.publisher = "Addison-Wesley Professional"
    })
  })

  describe('validatesPublishYear()', function(){
    it("Should return modified item.volumeInfo.publishedDate if property 'exists' and is not 'undefined'", function(){
      validatesPublishYear(item, itemObj)
      expect(itemObj.publishYear).toEqual(" - 1999")
    })

    it("Should return an empty string if property 'exists' but is 'undefined'", function(){
      item.volumeInfo.publishedDate = undefined
      validatesPublishYear(item, itemObj)
      expect(itemObj.publishYear).toEqual("")
      item.volumeInfo.publishedDate = "1999"
    })

    it("Should return an empty string if property dosent 'exists'", function(){
      delete item.volumeInfo.publishedDate
      validatesPublishYear(item, itemObj)
      expect(itemObj.publishYear).toEqual("")
      item.volumeInfo.publishedDate = "1999"
    })
  })

  describe('validatesPageCount()', function(){
    it("Should return modified item.volumeInfo.pageCount if property 'exists' and is not 'undefined'", function(){
      validatesPageCount(item, itemObj)
      expect(itemObj.pageCount).toEqual('352 pages')
    })

    it("Should return an empty string if property 'exists' but is 'undefined'", function(){
      item.volumeInfo.pageCount = undefined
      validatesPageCount(item, itemObj)
      expect(itemObj.pageCount).toEqual("")
      item.volumeInfo.pageCount = 352
    })

    it("Should return an empty string if property dosent 'exists'", function(){
      delete item.volumeInfo.pageCount
      validatesPageCount(item, itemObj)
      expect(itemObj.pageCount).toEqual("")
      item.volumeInfo.pageCount = 352
    })
  })

  describe('validatesSubtext()', function(){
    it("Should return item.searchInfo.textSnippet if property 'exists' and is not 'undefined'", function(){
      validatesSubtext(item, itemObj)
      expect(itemObj.subtext).toEqual("What others in the trenches say about The Pragmatic Programmer... “The cool thing about this book is that it’s great for keeping the programming process fresh.")
    })

    it("Should return an empty string if property 'exists' but is 'undefined'", function(){
      item.searchInfo.textSnippet = undefined
      validatesSubtext(item, itemObj)
      expect(itemObj.subtext).toEqual("")
      item.searchInfo.textSnippet = "What others in the trenches say about The Pragmatic Programmer... “The cool thing about this book is that it’s great for keeping the programming process fresh."
    })

    it("Should return an empty string if property dosent 'exists'", function(){
      delete item.searchInfo.textSnippet
      validatesSubtext(item, itemObj)
      expect(itemObj.subtext).toEqual("")
      item.searchInfo.textSnippet = "What others in the trenches say about The Pragmatic Programmer... “The cool thing about this book is that it’s great for keeping the programming process fresh."
    })
  })

  describe('validatesSubject()', function(){
    it("Should return modified item.volumeInfo.categories if property 'exists' and is not 'undefined'", function(){
      validatesSubject(item, itemObj)
      expect(itemObj.subject).toEqual("Computers")
    })

    it("Should return an empty string if property 'exists' but is 'undefined'", function(){
      item.volumeInfo.categories = undefined
      validatesSubject(item, itemObj)
      expect(itemObj.subject).toEqual("")
      item.volumeInfo.categories = "Computers"
    })

    it("Should return an empty string if property dosent 'exists'", function(){
      delete item.volumeInfo.categories
      validatesSubject(item, itemObj)
      expect(itemObj.subject).toEqual("")
      item.volumeInfo.categories = "Computers"
    })
  })

  describe('validatesLink()', function(){
    it("Should return HTML anchor tag renderings if property 'exists' and is not 'undefined'", function(){
      validatesLink(item, itemObj)
      expect(itemObj.linkClosingTag).toEqual('</a>')
      expect(itemObj.linkClosingTagLongTitle).toEqual('</a>')
      expect(itemObj.linkThumbnail).toEqual('<a href="https://play.google.com/store/books/details?id=5wBQEp6ruIAC&source=gbs_api"target="_blank">')
      expect(itemObj.linkLongTitle).toEqual('<a href="https://play.google.com/store/books/details?id=5wBQEp6ruIAC&source=gbs_api"target="_blank" class="no-decoration" data-toggle="tooltip" data-placement="top" title="The Pragmatic Programmer">')
      expect(itemObj.linkShortTitle).toEqual('<a href="https://play.google.com/store/books/details?id=5wBQEp6ruIAC&source=gbs_api"target="_blank" class="no-decoration">')
      expect(itemObj.moreInfo).toEqual('<a href="https://play.google.com/store/books/details?id=5wBQEp6ruIAC&source=gbs_api"target="_blank" class="link-list-item">More Info</a>')
    })

    it("Should return non HTML anchor tag renderings if property 'exists' but is 'undefined'", function(){
      item.volumeInfo.infoLink = undefined
      validatesLink(item, itemObj)
      expect(itemObj.linkClosingTag).toEqual('')
      expect(itemObj.linkClosingTagLongTitle).toEqual('</span>')
      expect(itemObj.linkThumbnail).toEqual('')
      expect(itemObj.linkLongTitle).toEqual('<span data-toggle="tooltip" data-placement="top" title="The Pragmatic Programmer">')
      expect(itemObj.linkShortTitle).toEqual('')
      expect(itemObj.moreInfo).toEqual('')
      item.volumeInfo.infoLink = "https://play.google.com/store/books/details?id=5wBQEp6ruIAC&source=gbs_api"
    })

    it("Should return non HTML anchor tag renderings if property dosent 'exists'", function(){
      delete item.volumeInfo.infoLink
      validatesLink(item, itemObj)
      expect(itemObj.linkClosingTag).toEqual('')
      expect(itemObj.linkClosingTagLongTitle).toEqual('</span>')
      expect(itemObj.linkThumbnail).toEqual('')
      expect(itemObj.linkLongTitle).toEqual('<span data-toggle="tooltip" data-placement="top" title="The Pragmatic Programmer">')
      expect(itemObj.linkShortTitle).toEqual('')
      expect(itemObj.moreInfo).toEqual('')
      item.volumeInfo.infoLink = "https://play.google.com/store/books/details?id=5wBQEp6ruIAC&source=gbs_api"
    })
  })

  describe('validatesAmazon()', function(){
    it("Should return ISBN_13 identifier if property 'exists' and is not 'undefined'", function(){
      validatesAmazon(item, itemObj)
      expect(itemObj.amazon).toEqual('<a href="https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=9780132119177" target="_blank" class="link-list-item">Amazon</a>')
    })

    it("Should return an empty string if property 'exists' but is 'undefined'", function(){
      item.volumeInfo.industryIdentifiers = undefined
      validatesAmazon(item, itemObj)
      expect(itemObj.amazon).toEqual("")
      item.volumeInfo.industryIdentifiers = [
        {
          type: "ISBN_13",
          identifier: "9780132119177"
        },
        {
          type: "ISBN_10",
          identifier: "013211917X"
        }
      ]
    })

    it("Should return an empty string if property dosent 'exists'", function(){
      delete item.volumeInfo.industryIdentifiers
      validatesAmazon(item, itemObj)
      expect(itemObj.amazon).toEqual("")
      item.volumeInfo.industryIdentifiers = [
        {
          type: "ISBN_13",
          identifier: "9780132119177"
        },
        {
          type: "ISBN_10",
          identifier: "013211917X"
        }
      ]
    })
  })

  describe('validatesPreviewLink()', function(){
    it("Should return item.accessInfo.webReaderLink if property 'exists', is not 'undefined', and item.accessInfo.accessViewStatus dosent equal 'NONE'", function(){
      validatesPreviewLink(item, itemObj)
      expect(itemObj.previewLink).toEqual('<a href="http://play.google.com/books/reader?id=5wBQEp6ruIAC&hl=&printsec=frontcover&source=gbs_api"target="_blank" class="link-list-item">Preview</a>')
    })

    it("Should return an empty string if property 'exists', is not 'undefined', but item.accessInfo.accessViewStatus equals 'NONE'", function(){
      item.accessInfo.accessViewStatus = 'NONE'
      validatesPreviewLink(item, itemObj)
      expect(itemObj.previewLink).toEqual("")
      item.accessInfo.accessViewStatus = "SAMPLE"
    })

    it("Should return an empty string if property 'exists' but is not 'undefined'", function(){
      item.accessInfo.webReaderLink = undefined
      validatesPreviewLink(item, itemObj)
      expect(itemObj.previewLink).toEqual("")
      item.accessInfo.webReaderLink = "http://play.google.com/books/reader?id=5wBQEp6ruIAC&hl=&printsec=frontcover&source=gbs_api"
    })

    it("Should return an empty string if property dosent 'exists'", function(){
      delete item.accessInfo.webReaderLink
      validatesPreviewLink(item, itemObj)
      expect(itemObj.previewLink).toEqual("")
      item.accessInfo.webReaderLink = "http://play.google.com/books/reader?id=5wBQEp6ruIAC&hl=&printsec=frontcover&source=gbs_api"
    })
  })

   describe('getISBN13Link()', function(){
    it("Should look for ISBN_13 type within an array and return its identifier if found", function(){
      value = getISBN13Link(item)
      expect(value).toEqual("9780132119177")
    })

    it("Should look for ISBN_13 type within an array and return 'undefined' if not found", function(){
      item.volumeInfo.industryIdentifiers = [
        {
          type: "ISBN_12",
          identifier: "9780132119177"
        },
        {
          type: "ISBN_10",
          identifier: "013211917X"
        }
      ]
      value = getISBN13Link(item)
      expect(value).toEqual('')
      item.volumeInfo.industryIdentifiers = [
        {
          type: "ISBN_13",
          identifier: "9780132119177"
        },
        {
          type: "ISBN_10",
          identifier: "013211917X"
        }
      ]
    })
  })

})