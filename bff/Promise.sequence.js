// type Callback = (error: Error, data: any) => void;
// type AsyncFunc = (callback: Callback, data: any) => void;

// function sequence(funcs) {
//   let i = 0;

//   const sequenced = (finalCallback, input) => {
//     if (i === funcs.length) {
//       finalCallback(undefined, input);
//       return;
//     }

//     const func = funcs[i];
//     func((err, data) => {
//       if (err) {
//         finalCallback(err);
//         return;
//       }
//       i++;
//       sequenced(finalCallback, data);
//     }, input);
//   };
//   return sequenced;
// }

function sequence(funcs) {
  const promisifiedFuncs = funcs.map((func) => promisify(func));

  return (finalCallback, input) => {
    const finalPromise = promisifiedFuncs.reduce((promise, promisifiedFunc) => {
      return promise.then((res) => promisifiedFunc(res));
    }, Promise.resolve(input));

    finalPromise
      .then((res) => {
        finalCallback(undefined, res);
      })
      .catch((err) => {
        finalCallback(err);
      });
  };
}

function promisify(func) {
  return (input) =>
    new Promise((resolve, reject) => {
      func((err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      }, input);
    });
}


const asyncTimes2 = (callback, num) => {
  setTimeout(() => callback(null, num * 2), 1000)
}

const asyncTimes3 = (callback, num) => {
  setTimeout(() => callback(null, num * 3), 3000)
}

const asyncTimes4 = sequence([asyncTimes2, asyncTimes3, asyncTimes2]);

asyncTimes4((error, data) => {
  console.log(data); // 4
}, 1);