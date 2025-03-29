const arr = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,]
let count = 0

function bubbleSort(array) {

}

console.log('length', arr.length)
console.log(bubbleSort(arr)) // O(n*n)
// console.log(bubbleSort2(arr)) // 2704 -> 1323
console.log('count = ', count)

// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j + 1] < array[j]) {
//                 let tmp = array[j]
//                 array[j] = array[j+1]
//                 array[j+1] = tmp
//             }
//             count+=1
//         }
//     }
//     return array
// }

// function bubbleSort2(arr) {
//   let hasNoSwaps;
//   for (let i = arr.length; i >= 0; i--) {
//     hasNoSwaps = true;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         hasNoSwaps = false;
//       }
//       count+=1
//     }
//     if (hasNoSwaps) {
//       break;
//     }
//   }
//     return arr
// }