/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let preNode = null;
    while (list1 || list2) {
        if (list1.val < list2.val) {
            preNode = list1.next;
            list1.next = list2;
        } else {
            preNode = list2.next;
            list2.next = list1;
        }
        preNode = preNode.next;
    }
    preNode.next = list1 === null ? list2 : list1;
    return preNode.next;
};


module.exports = mergeTwoLists;


