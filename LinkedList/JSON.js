const json = { a: { b: { c: { d: 1 } } }, e: { f: 2 } }
const path = ['a', 'b', 'c', 'd']

// 沿着path提供的路径寻找json关联
let p = json
path.forEach(k => {
  p = p[k]
})