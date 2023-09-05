//  instanceOf原理，并用代码实现
const instanceOf = (A, B) => {
  let p1 = A
  while (p1) {
    if (p1 === B.prototype) {
      return true
    }
    p1 = p1.__proto__
  }
  return false
}