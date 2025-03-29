const delay = (ms, returnValue) => {
	return new Promise((resolve) => {
			setTimeout(() => {
				resolve(returnValue)
			}, ms)
	})
}

const values = [1, 2, 3]

// values.forEach(async (value) => {
// 	const result = await delay(1000, value)
// 	console.log(result)
// })

console.log('done')

for (let i = 0; i < values.length; i++) {
	console.log(await delay(1000, values[i]))
}