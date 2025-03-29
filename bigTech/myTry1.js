// ф-ции порождающие ф-ции, промисы, итерации и рекюрсии асинхронок, на знание методов стрингов

// ----- 1 -----

function strMethod(segment, ...args) {
	return args.join(segment)
}

strMethod('.', 'a', 'b', 'c') // a.b.c
strMethod('-', 'a', 'b', 'c', 'd') // a-b-c-d

// ----- 2 -----

const time = (x) => 'time' + x
const sqr = x => x*x
const sum = (...args) => args.reduce((a, n) => a + n, 0)

const compose = (...func) => {
	return (...args) => {
		return func
      .slice()
			.reverse()
			.reduce((a, f, i) => i > 0 ? f(a) : f(...a), args)
	}
}

compose(time, sum)(2)
compose(time, sqr, sum)(1)
compose(time, sqr, sum)(1, 2, 3)
// compose(HOC1, HOC2, HOC3)({props, state}, {props, state})


// ----- 3 -----

function auth() {
	asyncAuth((error, result) => {})
}

// Можно через асинк эвейты
function auth() {
	return new Promise((resolve, reject) => {
			asyncAuth((error, result) => {
				if (error) reject(error)
				resolve(result)
			})
	})
}

tryAuth(n) {
	const tryCount = 0

	return new Promise((resolve, reject) => {
		auth
			.then(result => resolve(result))
			.catch(err => {
				tryCount++

				if (tryCount > n) return reject(err)

				tryAuth(n - 1)
			})
	})
}