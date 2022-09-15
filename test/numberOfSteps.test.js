const numberOfSteps = require('../src/numberOfSteps')

describe('return steps required to reduce to zero', () => {
    test('even number reduced to zero', () => {
        expect(numberOfSteps(14)).toBe(6)
    })
    test('even reduced to zero', () => {
        expect(numberOfSteps(8)).toBe(4)
    })
    test('large number reduced to zero', () => {
        expect(numberOfSteps(123)).toBe(12)
    })
})