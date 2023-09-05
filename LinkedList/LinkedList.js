const a = { val : 'a' }
const b = { val : 'b' }
const c = { val : 'c' }
const d = { val : 'd' }

// 以上四个存储的数据不连续

a.next = b
b.next = c
c.next = d

// a b c d 都是链表 abcd合在一起又是一个大链表
// 首先声明一个指针P，然后开始循环链表
let p = a
while (p) {
  console.log(p.val)
  p = p.next
}

// 在链表之间插值
const e = { val : 'e' }
b.next = e
e.next = c

// 删除链表中间的值
b.next = c