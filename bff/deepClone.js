const cachedResult = new WeakMap();

function cloneDeep(data) {
  if (data === null || data === undefined) {
    return data;
  }

  if (typeof data !== 'object') {
    return data;
  }

  // If the source object is already in the WeakMap,
  // its corresponding copy is returned instead of recursing
  // further.
  if (cachedResult.has(data)) {
    return cachedResult.get(data);
  }

  const clone = Array.isArray(data) ? [] : {};
  // Store the source object and its clone in the WeakMap.
  cachedResult.set(data, clone);

  const keys = [
    ...Object.getOwnPropertyNames(data),
    ...Object.getOwnPropertySymbols(data),
  ];
  for (const key of keys) {
    clone[key] = cloneDeep(data[key]);
  }

  return clone;
}

const obj1 = {
    a: 2, 
    b: [2, 2], 
    c: { f: 50 }
}

const obj2 = obj1
const obj3 = {...obj1}
const obj4 = JSON.parse(JSON.stringify(obj1))

const deepCopyObj = cloneDeep(obj1)

console.log('DeepClone')

console.log('DeepClone: copied by link')
console.log(obj1 === obj2)
console.log(obj1.c === obj2.c)

console.log('DeepClone: cloned')
console.log(obj1 === deepCopyObj)
console.log(obj1.c === deepCopyObj.c)

console.log('DeepClone: spread')
console.log(obj1 === obj3)
console.log(obj1.c === obj3.c)

console.log('DeepClone: parse')
console.log(obj1 === obj4)
console.log(obj1.c === obj4.c)

console.log('DeepClone: recursive')
const objRecursive = {};
objRecursive.self = objRecursive;
const deepCopyRecursiveObj = cloneDeep(objRecursive)

console.log(objRecursive)
console.log(deepCopyRecursiveObj)
console.log(objRecursive === deepCopyRecursiveObj)
console.log(objRecursive.self === deepCopyRecursiveObj.self)
