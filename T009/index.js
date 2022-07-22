/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x === 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }
    let revertNumber = 0;
    while (x > revertNumber) {
        revertNumber = revertNumber * 10 + x % 10
        x = Math.floor(x/10);
    }
    return (x === revertNumber || Math.floor(revertNumber / 10) === x);
}


module.exports = isPalindrome;


