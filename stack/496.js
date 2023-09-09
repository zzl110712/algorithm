var nextGreaterElement = function(nums1, nums2) {
  // 先建一个需要返回的数组，因为如果不满足条件需要返回-1那就用-1占位
  // 这里用nums1的长度来规定返回数组的长度，因为需要寻找的是比nums1数组里面大的元素
  let result = Array.from(nums1).fill(-1)

  // 栈 => 让栈的第一位默认是0：因为用新的元素和站定元素进行比较的时候，如果是空栈，则需要入栈
  let stack = [nums2[0]]

  // 因为需要通过nums2对比nums1数组位置，那就需要先为nums1建立映射关系，方便通过nums当前的元素找到nums1数组元素的下标
  // { 元素的值：元素的下标 }
  // let map = new Map()
  // for (let i = 0; i < nums1.length; i++) {
  //   map.set(nums1[i], i)
  // }
  // 这里的映射关系是否真的需要？

  for (let i = 1; i < nums2.length; i++) {
    // 这里如果改变result的值，一定满足两个条件，就是栈首先不能为空，其次新入元素一定要比栈顶元素大
    while (stack.length && nums2[i] > stack[stack.length - 1]) {
      let index = stack.pop()
      // if (map.has(index)) {
      //   result[map.get(index)] = nums2[i] 
      // }
      let num = nums1.findIndex(item => item === index)
      console.log(num)
      if (num || num === 0) {
        result[num] = nums2[i] 
      }
    }
    // 无论是否满足上面的条件，最后都是需要入栈的
    stack.push(nums2[i])
  }

  return result
};