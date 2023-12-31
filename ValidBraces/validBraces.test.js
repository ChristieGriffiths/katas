const validBraces = require('./validBraces');

describe('validBraces', () => {
  it('returns true when giving a pair of matching braces', () => {
    const result = validBraces('()')
    expect(result).toEqual(true)
  })
  it('returns false when giving a pair of non-matching braces', () => {
    const result = validBraces('(}')
    expect(result).toEqual(false)
  })
    it('returns true when giving 2 pairs of matching braces', () => {
    const result = validBraces('()[]')
    expect(result).toEqual(true)
  })
    it('returns true when given codewars example', () => {
    const result = validBraces("([{}])")
    expect(result).toEqual(true)
  })
    it('returns false when giving a pair of matching & non-matching braces', () => {
    const result = validBraces('(){)')
    expect(result).toEqual(false)
  })
    it('returns false when a new braces is opened before the former braces are closed', () => {
    const result = validBraces('[(])')
    expect(result).toEqual(false)
  })
    it('returns false if brackets are never closed', () => {
    const result = validBraces('(((({{')
    expect(result).toEqual(false)
  })
})
