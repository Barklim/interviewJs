const arr = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,]
let count = 0

function quickSort(array) {

}

console.log(quickSort(arr)) // 308 -> 412
// console.log(quickSort2(arr))
console.log('count', count)

// function quickSort(array) {
//     if (array.length <= 1) {
//         return array
//     }
//     let pivotIndex = Math.floor(array.length / 2);
//     let pivot = array[pivotIndex]
//     let less = []
//     let greater = []
//     for (let i = 0; i < array.length; i++) {
//         count += 1
//         if(i === pivotIndex)
//             continue
//         if (array[i] < pivot) {
//             less.push(array[i])
//         } else {
//             greater.push(array[i])
//         }
//     }
//     return [...quickSort(less), pivot, ...quickSort(greater)]
// }

// function quickSort2(arr) {
//   quickSortImpl(arr, 0, arr.length - 1);
// }

// function quickSortImpl(arr, low, high) {
//   if (low >= high) {
//     return;
//   }

//   const pivotIndex = partition(arr, low, high);
//   quickSortImpl(arr, low, pivotIndex - 1);
//   quickSortImpl(arr, pivotIndex + 1, high);
// }

// function partition(arr, low, high) {
//   const pivot = arr[high];
//   let i = low;
//   for (let j = low; j < high; j++) {
//     count += 1
//     if (arr[j] < pivot) {
//       [arr[j], arr[i]] = [arr[i], arr[j]];
//       i++;
//     }
//   }

//   [arr[i], arr[high]] = [arr[high], arr[i]];
//   return i;
// }