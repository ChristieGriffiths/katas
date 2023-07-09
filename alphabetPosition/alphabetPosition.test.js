const alphabetPositon = require ('./alphabetPosition');

describe('', () => {
  it('returns a 1 for the letter a', () => {
    expect(alphabetPositon('a')).toEqual('1')
  })
  it('returns a 1 for the letter a and 2 for b', () => {
    expect(alphabetPositon('ab')).toEqual('1 2')
  })
  it('returns a 1 for the letter a and 2 for b but nothing if it\'s not a letter', () => {
    expect(alphabetPositon('ab3')).toEqual('1 2')
  })
})