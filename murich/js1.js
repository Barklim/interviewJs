// https://www.youtube.com/watch?v=Cc9XBcUioBI&list=PL3ziSA8uO7KmJo-QbCvhj57cVW5JF5Nyx&index=3&ab_channel=AsForJS

// Что сделает выведит программа
1

// Numeric Literal 1 при выполнении возвращает 1
// То есть это некоторое выражение, а если так
1;

// В таком случае тут вычисляется последнее выражение 2
1
2

// Выше сам js расставляет ;
1; 2

// Что тут?
1, 2

// 1,2 -> (1,2);

// Сколько выражений
var a = 1;

// var ((a) = (1))(;)

// Тут наш интерпритатор работающий с js кодом начинает знать что у нас появился идентификатор a
// "use strict";
// var a;
//((a)=(1))(;)

// ; - помощь интепретатору быстрее разобрать наш код

a + 2

// Консоль возвращает результат выполнения последнего выражения

(
    () => {
        a = {
            valueOf: () => 3
        }

        return ((a) + (2))
    }
)()

(
    () => {
        var b = {
            valueOf: () => 3
        }

        return ( {valueOf: () => 3} + (b))
    }
)()

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/runtime/runtime-debug.cc;l=1?q=runtime-debug&ss=chromium%2Fchromium%2Fsrc

// Cмотрит слева направо! Значит первое выражение это object literal, а во втором стоит "+" поэтому там происходит вычисление числа
// То есть слева это блок стейтмант который возвращает ничто, а справа '+ {}', он это интерпритирует как экспрешн который приводит к числу
// то есть в правой части 13.5.4 унарный оператор
{ valueOf: () => (++theCounter, 1) } + { valueOf: () => (theCounter = 10, 4) }
// 4, theCounter = 10
// Получается что слева то не объект

(
    () => {
        a: {
            b: {
                c: {
                    break b;
                    console.log('c')
                }
                console.log('b')
            }
            console.log('a')
        }
        console.log('main')
    }
)()


var newPromise = new Promise((doRes, doRej) => {})
var pr = Promise.resolve(newPromise)
var pr1 = Promise.resolve(pr)
var pr2 = Promise.resolve(pr1)
var pr3 = Promise.resolve(pr2)

newPromise === pr
pr === pr2
pr2 === pr3
pr3 === newPromise

// ----- -----

var newPromise = new Promise((doRes, doRej) => {})
var prRej = Promise.reject(newPromise)

newPromise === prRej

// ----- -----

var newPromise = new Promise((doRes, doRej) => { doRes(1)})
Promise.resolve(Promise.resolve(Promise.resolve(newPromise))) === newPromise

var prRej = Promise.reject(newPromise)

// На самом деле спецификация промиса такая что есть состояния
// Когда мы ждем результат
// Состояние когда мы ожидаем тот результат и он может быть + или -
// Когда мы переводим промис в режим когда мы сообщаем ему причину по которой он отклонен
// То есть реджект приходит не результат отрицания, а куда передается прчина почему промис не был не разрешен

// Тут ошибка потому что это анхендлел промис то есть ни одного обработчика у него нет
// Promise.reject(newPromise)
// тут соовт нет ошибки потому что он не unhandled
// Promise.reject(newPromise).then(() => {}, () => {})

var testPromise = new Promise(
    (doRes, doRej) => {
        doRej(1)
    }
)

setTimeout(() => {
    testPromise.catch(console.log)
}, 5000)