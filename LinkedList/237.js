// 链表删除
// [4 -> 5 -> 1 -> 9]
// 在链表中无法直接获取被删除节点的上个节点
// 只能获取摸某个节点的下个节点
// 所以如果在这种背景下，想删除某个节点，就要将被删除的节点转移到下个节点，在删除下个节点之前，将下个节点得值转移到这个节点
// [4 -> 5 -> 1 -> 9] 删除1，就需要将链表变成 [4 -> 5 -> 9 -> 9],直接删除最后一个节点即可
// 事件复杂度O(1),空间复杂度O(1)
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}