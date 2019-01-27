describe('---STRING_MODS---', function(){
  describe('stringMaxLength()',function(){
    it('it should return a sentance no longer than the maxLength when the sentance is longer then the maxLength', function(){
      var sentance = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      var maxLength = 4
      expect(stringMaxLength(sentance, maxLength)).toBe("Lorem...")
    })

    it('it should return a sentance no longer than the maxLength when the sentance is shorter then the maxLength', function(){
      var sentance = "software is a craft" 
      var maxLength = 30
      expect(stringMaxLength(sentance, maxLength)).toBe("software is a craft")
    })
  })

})