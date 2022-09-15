/*
 * Given an integer num,
 * return the number of steps to reduce it to zero.
 *
 * In one step, if the current number is even,
 * you have to divide it by 2, otherwise,
 * you have to subtract 1 from it.
 */

/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    let steps = 0
    let goal = 0
    while(num > goal) {
        if(num % 2 === 0) {
            num = num / 2
            steps++
        } else {
            num = num - 1
            steps++
        }
        console.log(num)
    }
    return steps
};

module.exports = numberOfSteps

