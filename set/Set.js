let mySet = new Set()
// add
mySet.add(1)
mySet.add(1)
// has
mySet.has(1)
// delete
mySet.delete(1)
// size
mySet.size
// 遍历set
for (let item of mySet) {
  console.log(item);
}
for (let item of mySet.keys()) {
  console.log(item);
}
for (let item of mySet.values()) {
  console.log(item);
}
for (let item of mySet.entries()) {
  console.log(item);
}
// set转化array
const myArr = [...mySet]
const myArr1 = Array.from(mySet)
// array转化set
const mySet1 = new Set([1, 2, 3, 4])

// 交集 intersection
const intersection = new Set([...mySet].filter(x => mySet1.has(x)))
// 差集 difference
const difference = new Set([...mySet].filter(x => !mySet1.has(x)))