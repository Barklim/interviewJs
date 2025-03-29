// Recursive Solution
// Recursive Solution with Reduce
// Iterative Solution with Stack
function flat(arr, depth = 1) {
    let flatArray = [];
    for (const item of arr) {
      if (Array.isArray(item) && depth > 0) {
        flatArray = flatArray.concat(flat(item, depth - 1));
      } else {
        flatArray.push(item);
      }
    }
    return flatArray;
  }
  
  // flat([1, [2,3], 4])
  ex1 = flat([[1, [2], [3, [4]]]], 0) // [Array(3)]
  ex2 = flat([[1, [2], [3, [4]]]], 1) // [1, Array(1), Array(2)]
  ex3 = flat([[1, [2], [3, [4]]]], 2) // [1, 2, 3, Array(1)]
  ex4 = flat([[1, [2], [3, [4]]]], 3) // [1, 2, 3, 4]
  
  console.log(ex1)
  console.log(ex2)
  console.log(ex3)
  console.log(ex4)