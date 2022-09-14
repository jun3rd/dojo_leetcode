const fizzbuzz = require('../src/fizzbuzz')

describe(`
    given integer n, return string array answer (1-indexed) where:
        answer[i] == "FizzBuzz" if "i" is divisible by both 3 and 5
        answer[i] == "Fizz" if "i" is divisible by 3
        answer[i] == "Buzz" if "i" is divisible by 5
        answer[i] == "i" (as a string) if none of the above conditions are true
`, () => {
    test('n = 3', () => {
        expect(fizzbuzz(3)).toEqual(["1", "2", "Fizz"])
    })
    test('n = 5', () => {
        expect(fizzbuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"])
    })
    test('n = 15', () => {
        expect(fizzbuzz(15)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"])
    })
})


