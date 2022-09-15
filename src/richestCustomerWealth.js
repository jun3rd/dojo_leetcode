/*
 * 1672. Richest Customer Wealth
 *
 * You are given an m x n integer grid accounts
 * where accounts[i][j] is the amount of money
 * the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
 * Return the wealth that the richest customer has.
 * 
 * A customer's wealth is the amount of money they have in all their bank accounts.
 * The richest customer is the customer that has the maximum wealth.
 */


/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let customersOwn = []
    accounts.forEach(customer => {
        let customerAmount = customer.reduce((runningTotal, amount) => {
            return runningTotal + amount
        })
        customersOwn.push(customerAmount)
    })
    
    let maxAmount = Math.max(...customersOwn)
    return maxAmount
};

module.exports = maximumWealth