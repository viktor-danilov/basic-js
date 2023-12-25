const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = new Array;
  for(let i = 0; i < n.toString().length; i++)
    arr.push(+(n.toString().slice(0,i)+n.toString().slice(i+1,n.toString().length)));
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
