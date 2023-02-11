function everyThird(arr, idx=2, result=[]) {
  if (idx >= arr.length) return result;
  result.push(arr[idx]);
  everyThird(arr, idx+3, result)
  return result;

}

let arr = [10, 20, 30, 40, 50, 60, 70]


console.log("🚀 ~ file: everyThird.js:9 ~ everyThird(arr)", everyThird(arr))

module.exports = everyThird;
