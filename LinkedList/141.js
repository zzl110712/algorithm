// 环形链表 (遍历链表)
// 两个人在操场跑步，速度快的人一定会超过速度慢的人一圈
// 可以一快一慢两个指针遍历链表，如果指针能够相逢，那么链表就有圈
/**
 * 什么是一快一慢指针(快慢针)
 * 慢的指针是一次一步，例如p1 = p1.next
 * 快的指针可以一次两步，例如p1 = p1.next.next
 */

// 用一快一慢两个指针遍历链表，如果指针能够相逢，就返回true，如果遍历结束后，两个指针么有相逢返回false
var hasCycle = function(head) {
  let p1 = head // 慢
  let p2 = head // 快

  while (p1 && p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next

    if (p1 === p2) {
      return true
    }
  }
  return false
};