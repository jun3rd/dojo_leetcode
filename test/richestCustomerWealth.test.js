const maximumWealth = require('../src/richestCustomerWealth')

describe('find customer with maximum wealth', () => {
    test('2 customers with 3 accounts each', () => {
        expect(maximumWealth([[1,2,3],[3,2,1]])).toEqual(6)
    })
    test('3 customers with 2 accounts each', () => {
        expect(maximumWealth([[1,5],[7,3],[3,5]])).toEqual(10)
    })
    test('3 customers with 3 accounts each', () => {
        expect(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])).toEqual(17)
    })
})