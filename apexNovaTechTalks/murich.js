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

