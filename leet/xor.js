var divideArray = nums =>
    nums.reduce((a, v) => (a[v] = a[v] ^ 1, a), []).every(v => !v);

nums = [3,2,3,2,2,2];

divideArray(nums)

// var divideArray = nums => {
//     return nums.reduce((a, v) => {
//         debugger
//         return (a[v] = a[v] ^ 1, a)
// }, []).every(v => !v);
// }

// nums = [3,2,3,2,2,2];

// divideArray(nums)