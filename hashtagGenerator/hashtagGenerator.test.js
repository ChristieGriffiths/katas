const generateHashtag = require('./hashtagGenerator')

describe('uniqueInOrder', () => {
  it('takes an empty string and returns false', () =>{
    const input = ""
    expect(generateHashtag(input)).toEqual(false)
  });
  it('hashtags a string', () =>{
    const input = "Test"
    expect(generateHashtag(input)).toEqual("#Test")
  });
  it('result greater than 140 return false', () =>{
    const input = "a".repeat(140)
    expect(generateHashtag(input)).toEqual(false)
  });
  it('Capitalizes each seperate word', () =>{
    const input = "Test this is"
    expect(generateHashtag(input)).toEqual("#TestThisIs")
  });
  it('does not add # if already starts with #', () =>{
    const input = "#Test"
    expect(generateHashtag(input)).toEqual("#Test")
  });
});