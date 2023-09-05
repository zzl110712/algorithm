// 首先，先考虑之反转链表的两个节点，那就只需要将n + 1的next指向n即可
// 反转多个节点：利用双指针遍历链表，重复上述操作
// [1 -> 2 -> 3 -> 4 -> 5 -> null]
// [5 -> 4 -> 3 -> 2 -> 1 -> null]
// 双指针一前一后遍历链表
// 翻转双指针
// 链表结构其实是a = { a: a, next : b } a就是链表

var reverseList = (head) => {
  let p1 = head, p2 = null;
  while (p1) {
    const tmp = p1.next // 2 next 3
    p1.next = p2 // null
    p2 = p1 // 1 next null
    p1 = tmp // 2 next 3
  }
  return p2
}
// 时间复杂度 O(n) 空间复杂度O(1)
