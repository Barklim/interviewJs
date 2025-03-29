let countCache = 0
let countExecute = 0

function memo(func, resolver) {
  const cache = new Map();
  
  return function (...args) {
    const key = resolver ? resolver(...args) : args.join('_');
    if (cache.has(key)) {
      countCache++;
      return cache.get(key);
    }

    const result = func.apply(this, args);
    cache.set(key, result);

    countExecute++
    return result;
  };
}

// ----- ----- Simple
// const func = (arg1, arg2) => {
//   return arg1 + arg2;
// };

// const memoed = memo(func);

// memoed(1, 2);
// memoed(1, 2);
// memoed(1, 3);

// console.log(countCache) // 1
// console.log(countExecute) // 2

// ----- ----- Object
// const func = (obj) => obj.value * 2;
// const memoed = memo(func);
// // const memoed = memo(func, obj => obj.value);

// const obj1 = { value: 21 };
// const obj2 = { value: 20 };

// ex1 =  memoed(obj1);
// ex2 = memoed(obj2); // ❌ Второй вызов не из кэша, потому что obj1 !== obj2

// console.log(countCache); // 0 (кэш не работает)
// console.log(countExecute); // 2 (функция вычислилась дважды)
// console.log(ex1);
// console.log(ex2);

// ----- ----- Order of args
// const func = (a, b) => a + b;
// // const memoed = memo(func);
// const memoed = memo(func, (a, b) => [a, b].sort().join('_'));

// memoed(1, 2);
// memoed(2, 1); // ❌ Будет вычислено заново!

// console.log(countCache); // 0
// console.log(countExecute); // 2