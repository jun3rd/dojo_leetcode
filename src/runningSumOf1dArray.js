/**
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */
var runningSum = function(nums) {
    let running_sums = [];
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i];
        running_sums.push(total)
    }
    return running_sums;
};

module.exports = runningSum

