/**
 * 栈是一个后进先出的数据结构
 * JavaScript中可用Array模拟栈的功能
 */
const stack = [] // 栈
stack.push(1) // 入栈
stack.push(2) // 入栈
let item1 = stack.pop() // 出栈 pop:移除数组最后一项并返回这个元素
let item2 = stack.pop() // 出栈 pop:移除数组最后一项并返回这个元素

// 什么场景下适合用栈：任何符合后进先出的场景都适合用栈

/**
 * 哪些场景用到了栈
 * 例如：
 * 十进制数字转成二进制数字
 * 函数调用堆栈
 */

// LeetCode 【简单】 20.有效的括号 https://leetcode.cn/problems/valid-parentheses/

/**
 * 解题思路：
 * 新建一个栈，如果是（ 、{、【就进行入站的操作
 * 如果是）、}、】就进行出栈的操作
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 先判断一下：如果字符串是奇数长度，那么这个字符串一定不是符合规则的，因为括号都是成对的
  if (s.length % 2 !== 0) return false
  let stack = []
  for (let item of s) {
    if (item === '(' || item === '{' || item === '[') {
      stack.push(item)
    } else {
      switch (item) {
        case ')':
          if (stack[stack.length - 1] === '(') {
            stack.pop()
          } else {
            return false
          }
          break;
        case '}':
          if (stack[stack.length - 1] === '{') {
            stack.pop()
          } else {
            return false
          }
          break;
        case ']':
          if (stack[stack.length - 1] === '[') {
            stack.pop()
          } else {
            return false
          }
          break;
      }
    }
  }
  return !stack.length
}

// 一样的思路不同的写法
// const isValid = (s) => {
//   if (s.length % 2) return false
//   const stack = []
//   for (let item of s) {
//     if (item === '(' || item === '{' || item === '[') {
//       stack.push(item)
//     } else {
//       const t = stack[stack.length - 1]
//       if ((item === '(' && t === ')') || (item === '{' && t === '}') || (item === '[' && t === ']')) {
//         stack.pop()
//       } else {
//         return false
//       }
//     }
//   }
//   return !stack.length
// }

// 时间复杂度 O(n) 只有一个循环并且循环里面的操作都是时间复杂度为1，最大循环整个列表因此时间复杂度是O(n)
// 空间复杂度 O(n) 新建了一个stackde数组，最大将把字符串里面所有的字符都会放数组里面，因此空间复杂度也是O(n)

// 还是括号相关的题目

// LeetCode 【中等】 678.有效的括号字符串 https://leetcode.cn/problems/valid-parenthesis-string/

/**
 * 解题思路：
 * 新建两个栈，因为这道题里面 * 也可以被算作成（ 或者 ）
 * 如果遇到的是（，那就执行入栈1操作（但是存储的是下标）
 * 如果遇到的是 * ，那就执行入栈2操作
 * 如果是），就先去匹配栈1，如果栈1里面匹配不到就去匹配栈2，在任何一个栈里面匹配到了相关的字符，就执行对应栈出栈
 * 最后，针对肯呢个还剩下的（ 进行和 * 匹配（因为 * 也可以被当成右括号来用），但需要匹配（ 和 * 出现的顺序，因为（ 必须出现 ）左边
 * 这就是为什么要存储下标的原因
 */

var checkValidString = (s) => {
  let stack1 = [] // 左括号的栈
  let stack2 = [] // 右括号的栈
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '(') {
      stack1.push(i)
    } else if (c === '*') {
      stack2.push(i)
    } else {
      if (stack1.length) {
        stack1.pop()
      } else if (stack2.length) {
        stack2.pop()
      } else {
        return false
      }
    }
  }

  // 循环两个站里面的下标
  while (stack1.length && stack2.length) {
    // ( 必须出现在 * 之前
    if (stack1[stack1.length - 1] < stack2[stack2.length - 1]) {
      stack1.pop()
      stack2.pop()
    } else {
      return false
    }
  }
  return !stack1.length
}

// 时间复杂度 O(n) 只有一个循环且其中的时间复杂度为1操作次数不会大于长度
// 空间复杂度 O(n) 占用的空间主要取决于两个栈的长度不会超过字符串的长度