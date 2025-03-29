function filter(arr, filterCallback) {
    if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') {
        return []
    } else {
        let result = []
        for (let i = 0, len = arr.length; i < len; i++) {
            if (filterCallback(arr[i], i, arr)) {
                result.push(arr[i])
            }
        }
        return result
    }
}

ex1 = filter([1, 2, 3], (num) => num !== 1)
ex2 = filter([1, 2, 3], (num) => num === 2)

console.log(ex1) // [2,3]
console.log(ex2) // [2]