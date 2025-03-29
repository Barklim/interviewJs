function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true; // Быстрая проверка на полное равенство
    
    if (!isObject(obj1) || !isObject(obj2)) return false; // Проверяем, что оба - объекты

    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) return false;

    for (let key of obj1Keys) {
        if (!Object.prototype.hasOwnProperty.call(obj2, key)) return false; // Проверяем существование ключа в obj2

        if (!deepEqual(obj1[key], obj2[key])) return false; // Рекурсивное сравнение значений
    }

    return true;
}

console.log(deepEqual({ a: 2, b: [2, 2], c: { f: 50 } }, { a: 1, b: [2, 2], c: { f: 50 } })); // false
console.log(deepEqual({ a: 1, b: [2, 2], c: { f: 50 } }, { a: 1, b: [2, 2], c: { f: 50 } })); // true
console.log(deepEqual({ a: 1, b: [2, 2], c: { f: 50 } }, { a: 1, b: [2, 2], c: { f: 51 } })); // false
