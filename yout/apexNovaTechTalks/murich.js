// ----- 1 -----

const obj = {
    a: 1,
    say() {
        console.log(this.a)
    }
}

const fn = obj.say

fn()

fn.call(obj)
fn.call('hihi')

// ----- 2 -----

function Book(name, author) {
    this.name = name
    this.author = author
}

// function Foo(Book, 'Учебник js', 'kb')

const myBook = Foo(Book, 'Учебник js', 'kb')
console.log(myBook) // {name: '', author: 'kb'}
console.log(myBook instanceof Book) // true

// function Foo(thePrototype, theName, theAuthor) {
//     var theObj = new thePrototype(theName, theAuthor)
//     return theObj
// }

function Foo(thePrototype, theName, theAuthor) {
    theObj = {
        name: theName,
        author: theAuthor
    }

    Reflect.setPrototypeOf(theObj, thePrototype.prototype)
    
    return theObj
}

// ----- 3 -----

const obj1 = {
    name: "EPAM",
    getName() {
        return this.name;
    },
    delayedGetName1() {
        setTimeout(function () {
            console.log("1", this.getName());
        }, 1000);
    },
    // delayedGetName1() {
    //     setTimeout(function (obj) {
    //         console.log("1", obj.getName());
    //     }, 1000, this);
    // },
    // delayedGetName1() {
    //     var self = this
    //     setTimeout(function () {
    //         console.log("1", self.getName());
    //     }, 1000);
    // },
    // delayedGetName1() {
    //     setTimeout(
    //         (function () {
    //             console.log("1", this.getName());
    //         }).bind(this)
    //     , 1000);
    // },
    delayedGetName2() {
        setTimeout(() => {
            console.log("2", this.getName());
        }, 1000);
    },
}

obj1.delayedGetName1()
obj1.delayedGetName2()

// ----- 4 -----

// Потому что внутри промиса свой try, catch и промис возвращает не Error exception, который отлавливался бы здесь во внешнем try catch,
// а возвращается промис в состоянии reject

// try {
//     new Promise(
//         (doRes, doRej) => {
//             throw 'some error'
//         }
//     )
// } catch (e) {
//     console.log('Error:', e)
// }

try {
    doRes = new Promise(
        (doRes, doRej) => {
            throw 'some error'
        }
    )
} catch (e) {
    console.log('Error:', e)
}

// Кэтч срабатывает не потому что он ловит ошибку, а потому что он видит промис в состоянии rejected
doRes.catch(() => {})

// (Комментируем код выше) А почему есть ошибка либо ее нет уже тема того что такое handled, unHandled промис
// Так а почему это работает в асинхронной ф-ции тогда?
// Если await в рез-тате вычисления внутри него(т.е. себя) получает промис в состоянии rejected, то он вызывает Throw (с тем что там было в Throw ниже)

async function doThing() {
    try {
        await (
            new Promise(
                (doRes, doRej) => {
                    throw 'some error'
                }
            )
        )
    } catch (e) {
        console.log('Error:', e)
    }
}

doThing()

// ----- 1 -----

// Функторы монады и теория категорий не часть ФП

let smth = 0;

function outerFunc(smth = 1, innerFunc = (() => console.log(smth))) {
    // 13.3.8.1
    // и если без var :) // let, const? { let smth = 2 innerFunc()}
    var smth = 2
    innerFunc()
}

outerFunc()

// ----- 2 -----

var obj = {}
Object.defineProperty(obj, 'age', {value: 21})
Reflect.getOwnPropertyDescriptor(obj, 'age')