/**
 * 
 * @param {number} n 
 * @returns {string[]}
 */
var fizzBuzz = function(n) {
    let answer = []
    for(let i=1; i<=n; i++) {
        
        let phrase = ""
        if(i%3 === 0) { phrase += "Fizz" }
        if(i%5 === 0) { phrase += "Buzz" }
        if(phrase) {
            answer[i-1] = phrase
        } else {
            answer[i-1] = i.toString()
        }
        
    }
    return answer
};

module.exports = fizzBuzz

