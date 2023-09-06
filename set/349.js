// 两个数组的交集
// 求交集且唯一
// 首先应该对num1进行去重(如果不去重，结果可能会包含重复的值)

// 1
var intersection = function(nums1, nums2) {
  return [...new Set(nums1)].filter(item => new Set(nums2).has(item))
};

var intersection = function(nums1, nums2) {
  return [...new Set(nums1)].filter(item => nums2.includes(item))
};

// 时间复杂度 O(m * n) m是去重后的nums1的长度，n是nums2的长度
// 空间复杂度O(m) m是去重后的num1的长度
