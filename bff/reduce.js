function reduce(arr, reduceCallbak, initialValue) {
    if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') {
        return []
    } else {
        let hasInitialValue = initialValue !== undefined
        let value = hasInitialValue ? initialValue : arr[0]

        for (let i = hasInitialValue ? 0 : 1, len = arr.length; i < len; i++) {
            value = reduceCallback(value, arr[i], i, arr)
        }
        return value
    }
}

ex1 = reduce([1, 2, 3], (a, num) => a + num, 0)
ex2 = reduce([1, 2, 3, 4], (a, num) => a + num, 10)

console.log(ex1) // []
console.log(ex2) // []