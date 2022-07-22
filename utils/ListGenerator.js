class ListNode {
    val;
    next;

    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 *
 * @param {Array<Number>} nums
 * @constructor
 */
const ListGenerator = (nums) => {
    var preNode = null;
    for (let i = nums.length; i >= 0; i--) {
        preNode = new ListNode(nums[i], preNode);
    }
    return preNode;
}

module.exports = ListGenerator;
