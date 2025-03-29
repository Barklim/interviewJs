Array.prototype.myMap = function (callback, thisArg) {
    const length = this.length;
    const result = new Array(length);
  
    for (let i = 0; i < length; i++) {
      if (i in this) {
        result[i] = callback.call(thisArg || this, this[i], i, this);
      }
    }
  
    return result;
  };
  
  ex1 = [1, 2, 3].myMap((num) => num * 3) // [3, 6, 9]
  ex2 = [1, 2, 3].myMap((num) => num * num)  // [1, 4, 9]
  
  const obj = { multiplier: 2 };
  const numbers = [1, 2, 3];
  const ex3 = numbers.myMap(function (num) {
      return num * this.multiplier; // this === undefined!
  }, obj);
  const arr = [1, , 3];
  const ex4 = arr.map(x => x * 2);
  
  console.log(ex1)
  console.log(ex2)
  console.log(ex3) // thisArg
  console.log(ex4) // sparse Array
  
  
  // function map(arr, mapCallback) {
  //     if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') {
  //         return []
  //     } else {
  //         let result = []
  //         for (let i = 0, len = arr.length; i < len; i++) {
  //             result.push(mapCallback(arr[i], i, arr))
  //         }
  //         return result
  //     }
  // }
  
  // ex1 = map([1, 2, 3], (num) => num * 3) // [3, 6, 9]
  // ex2 = map([1, 2, 3], (num) => num * num)  // [1, 4, 9]
  
  // const obj = { multiplier: 2 };
  // const numbers = [1, 2, 3];
  // const ex3 = map(numbers, function (num) {
  //     return num * this.multiplier; // this === undefined!
  // }, obj); 
  
  // const arr = [1, , 3];
  // const ex4 = map(arr, x => x * 2);
  
  // console.log(ex1) // [3, 6, 9]
  // console.log(ex2) // [1, 4, 9]
  // // console.log(ex3) // [NaN, NaN, NaN] //  Ошибка: this.multiplier is undefined
  // // console.log(ex4) // [2, NaN, 6]