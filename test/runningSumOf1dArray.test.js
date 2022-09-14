const runningSumOf1dArray = require('../src/runningSumOf1dArray')

describe('return running sum of an array of numbers', () => {
    test('return running sum of series of numbers', () => {
        expect(runningSumOf1dArray([1,2,3,4])).toEqual([1,3,6,10])
        /* explanation: [1, 1+2, 1+2+3, 1+2+3+4] */
    })
    test('return running sum of series of identical numbers', () => {
        expect(runningSumOf1dArray([1,1,1,1,1])).toEqual([1,2,3,4,5])
        /* explanation: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] */
    })
    test('return running sum of series of random numbers', () => {
        expect(runningSumOf1dArray([3,1,2,10,1])).toEqual([3,4,6,16,17])
        /* explanation: [3, 3+1, 3+1+2, 3+1+2+10, 3+1+2+10+1] */
    })
})