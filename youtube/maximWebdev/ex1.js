// maxim webdev | Maxim Filanovich

function Count() {
	let counter = 0

	return () => {
		console.log(counter++)
	}
}

const c = new Count()

c() // 0
c() // 1

console.log(new Count())
c.count = 0

c() // 2
c() // 3

const b = new Count()

b() //
b() //

// ---- ----

for (var i = []; i.length < 3; i.push(2)) {
	setTimeout(() => {
		console.log(i)
	}, i.length * 1000)
}

for (var i = []; i.length < 3; i.push(2)) {
	let snapshot = [...i]; // Копируем массив перед setTimeout
	setTimeout(() => {
		console.log(snapshot)
	}, i.length * 1000)
}

for (var i = []; i.length < 3; i.push(2)) {
	setTimeout((args) => {
		console.log(args)
	}, i.length * 1000, [...i])
}

// ---- ----

// чистая ф-ция при одних и тех же пар-рах возвращает одно и тоже значение (нет побочных эффектов)

setTimeout(() => console.log(1))
Promise.reject(2).catch(console.log)
Promise.resolve().then(() => setTimeout(() => console.log(3)))
new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4))
Promise.resolve(5).then(console.log)
setTimeout(() => console.log(6))
console.log(7)

// 7 2 5 1 4 6 3

// при ревью обработка ошибок, вывод после хуков, хуки не могут быть в ифах, обернуть в колбэк, при размонтировании отписка
// обертка вызова в трай кэтч

// ---- ----

const items = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' },
    { id: 3, name: 'Charlie' },
    { id: 2, name: 'Bob' },
]

const uniqueltems = Array.from(new Set(items));
console.log(uniqueltems)

// ---- ----

async function b() {
	return 1
}

async function a() {
	return b()
}

const res = await a()
console.log(res)

// ---- ----

// Утилитарные типы Omit, Pick, Partial, Extract, ReturnType, Exclude, Parameters
// Declaration merging
// 	если есть 2а интерфейса в приложении где у одного сво-во b а у другого c то в результате будет и b и c
// 	удобно когда хотим расширить типизацию встроенной библиотеки
// Strict null check