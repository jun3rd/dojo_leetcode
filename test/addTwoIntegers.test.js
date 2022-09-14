const addTwoIntegers = require('../src/addTwoIntegers')

describe('return the sum of two integers', () => {
    test('sum two integers', () => {
        expect(addTwoIntegers(12, 5)).toBe(17)
    })
})