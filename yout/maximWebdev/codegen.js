function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}

function createCodesGenerator(min, max) {
    const length = max - min + 1
    const codes = Array.from({ length }, (_, index) => {
        const code = String(min + index)
        return code.padStart(String(max).length, '0')
    })
    shuffle(codes)
    let currentCodeIndex = -1

    return () => {
        currentCodeIndex += 1
        if (currentCodeIndex > codes.length) return 'all codes reserved'
        return codes[currentCodeIndex]
    }
}

const generateCode = createCodesGenerator(1, 100)

for (let i = 0; i < 105; i++) {
    console.log(generateCode())
}
