// 遍历链表和删除链表节点
// 因为输入链表是有序的，所以重复元素一定相邻
// 遍历链表，如果发现当前元素和下个元素相同，就删除下个元素
// 遍历结束后，返回原来链表的头部(不能直接返回指针)

var deleteDuplicates = function(head) {
  // 涉及遍历链表都需要一个指针指向链表头部
  let p1 = head

  while (p1 && p1.next) {
    if (p1.val === p1.next.val) {
      p1.next = p1.next.next
    } else {
      p1 = p1.next
    }
  }
  return head
};