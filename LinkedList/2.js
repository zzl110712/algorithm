// 新建一个空链表用来返回
// 遍历被相加的两个链表，模拟相加操作，将个位数追加到新链表上，将十位数留到下一位相加

var addNumbers = (l1, l2) => {
  const l3 = new ListNode(0) // 新建空节点链表
  // 用指针遍历链表
  let p1 = l1 // 链表的头部就是链表元素本身 l1是链表也是链表头部
  let p2 = l2
  let p3 = l3
  let carry = 0 // 上一轮十位上的数字
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0
    const v2 = p2 ? p2.val : 0
    const val = v1 + v2 + carry // 这里有可能得到两位数
    carry = Math.floor(val / 10) // 获取本轮十位数上面的数字
    p3.next = new ListNode(val % 10)
    if (p1) {
      p1 = p1.next
    }
    if (p2) {
      p2 = p2.next
    }
    p3 = p3.next
  }
  if (carry) p3.next = new ListNode(carry)
  return l3.next // 返回不包括初始化的空节点
}
// 时间复杂度 O(n) n是l1 和 l2这两个链表长度较大的值 空间复杂度是O(n)