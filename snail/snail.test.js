const snail = require ("./snail")

describe("snail", () => {
  it("takes an array of an empty array and returns the empty array", () => {
    const input = [[]]
    expect(snail(input)).toEqual([])
  })
  it("takes an array of a non-empty array and returns the inside array", () => {
    const input = [[1]]
    expect(snail(input)).toEqual([1])
  })
  it("takes array of arrays and returns an array of the input but in a snake like fashion", () => {
    const input = [[1, 2], [3, 4]]
    expect(snail(input)).toEqual([1, 2, 4, 3])
  })
  it("takes array of arrays and returns an array of the input but in a snake like fashion", () => {
    const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    expect(snail(input)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
  })
  it("takes array of arrays and returns an array of the input but in a snake like fashion", () => {
    const input = [[1, 2, 3, 4], [ 5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
    expect(snail(input)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10])
  })
})