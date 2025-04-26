// itRostik yand

// ----- 1 -----
console.log("4" - 2)

// ----- 2 -----
var c = [1,2,3]
var d = c
d.push(4)
console.log(c)
console.log(d)

// ----- 8 -----

console.log(i)
var i = 10
console.log(i)

// ----- 9 -----

console.log(i)
const i = 10
console.log(i)

// ----- 10 -----

const array1 = [
    {id: 1},
    {id: 1},
    {id: 2}
]

const fn = (item) => item.id

console.log(array1.groupBy(fn))
// {
//     1: [{id: 1}, {id: 1}],
//     2: [{id: 2}]
// }

// Ex2
const array2 = [1, 2, 3]
console.log(array2.groupBy(String))
// {
//     "1": [1],
//     "2": [2],
//     "3": [3],
// }

// ----- 10 -----

/*
* Необходимо написать функцию, которая на вход принимает урл,
* асинхронно ходит по этому урлу GET запросом и возвращает данные (json) .
* Для получении данных использовать fetch.
* Можно использовать только Promise API
* Если во время запроса произошла ошибка, то пробовать запросить ещё 5 раз.
* Если в итоге информацию получить не удалось, вернуть ошибку "Заданный URL недоступен"
*/
function get(url) {

}

get(url)
    .then(res = console. log(res))
    .catch(err => console.error(err))

// ----- -----
// isPanagram

// ----- -----

// Необходимо проверить решение задачи по двум сервисам, вызвав checkResult(url1, solution), checkResult(url2, solution)
// checkResult: (url: string, solution: string | number) => Promise<boolean>;
// * Если оба запроса вернули true - вывести success
// * Если хоть один вернул false - вывести fail
// * Если хоть один не ответил - вывести error
// * Если хоть один отвечает дольше 1 сек - вывести timeout

import {checkResult) from 'myLib':
const solution = 'Any answer';
const url1 = 'yandex.ru';
const url2 = 'google.com';
checkResult(url1, solution);
checkResult(url2, solution);
