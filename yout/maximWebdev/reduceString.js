function reduceString(str) {
    let prevChar = null;
    let prevCharsCount = 0;
    let res = '';

    for (let i = 0; i < str.length; i += 1) {
        const char = str[i];

        if (prevChar === null) {
            prevChar = char;
            prevCharsCount = 1;
            continue;
        }

        if (prevChar === char) {
            prevCharsCount += 1;
        } else {
            res += `${prevChar}${prevCharsCount > 1 ? prevCharsCount : ''}`;
            prevChar = char;
            prevCharsCount = 1;
        }
    }

    if (prevCharsCount > 0 && prevChar !== null) {
        res += `${prevChar}${prevCharsCount > 1 ? prevCharsCount : ''}`;
    }

    return res;
}

console.log(reduceString('AAABBBBBBBHELP@@@@MEE_HELLOWORLD123333GGGF'));
// Ожидаемый вывод: "A3B7H1E1L1P1@4M1E2_1H1E1L2O1W1O1R1L1D1123G3F1"
