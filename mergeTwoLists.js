/**
 * https://leetcode.com/problems/merge-two-sorted-lists
 Definition for singly-linked list.
*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  let sortedList = new ListNode();
  while (list1 || list2) {
    if (list1 === null || list1.val > list2.val) {
      sortedList.next = list2;
      list2 = list2.next;
    } else {
      sortedList.next = list1;
      list1 = list1.next;
    }

    sortedList = sortedList.next;
  }

  return sortedList.next;
};

const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

console.log(mergeTwoLists(list1, list2));
