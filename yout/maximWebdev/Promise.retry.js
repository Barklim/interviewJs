// function fetchWithAutoRetry(fetcher, maximumRetryCount) {
//   return new Promise((resolve, reject) => {
//     const retry = () => {
//       fetcher()
//         .then((result) => {
//           resolve(result);
//         })
//         .catch((error) => {
//           if (maximumRetryCount > 0) {
//             maximumRetryCount--;
//             retry();
//           } else {
//             reject(error);
//           }
//         });
//     };

//     retry();
//   });
// }

// ----- -----
// Если асинхронный тест возвращает промис в статусе reject перезапускаем

// function test() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("Hello World Error"), 1000)
//   })
// }

// ----- -----

// let testCount = 0
// function test() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       testCount += 1
//       if (testCount > 3) {
//         resolve('Ураа')
//       } else {
//         reject("Hello World Error")
//       }
//     }, 1000)
//   })
// }

// retry(test, { count: 5, delay: (retryCount) => {
//   console.log(retryCount)
//   return retryCount * 1000
// } })
//     .then((res) => console.log('res', res))
//     .catch((err) => console.log('err', err))

// function retry(promiseFn, config) {
//   let retryCount = 0
  
//   return new Promise((resolve, reject) => {
//     const tryPromiseFn = () => {
//       promiseFn()
//         .then((result) => {
//           resolve(result);
//         })
//         .catch((error) => {
//           retryCount += 1

//           if (retryCount >= config.count) {
  //             return reject(new Error('Количество попыток исчерпано'))
//           }
          
//           const delayMs = config.delay(retryCount)
//           setTimeout(() => {
//             tryPromiseFn()
//           }, delayMs)
//         });
//     };


//     tryPromiseFn();

//   });
// }

// ----- ----- throw new Error() ----- -----

let testCount = 0
function test() {
  // Может выбросится синхронная ошибка, поэтому нужен try catch
  throw new Error()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      testCount += 1
      if (testCount > 3) {
        resolve('Ураа')
      } else {
        reject("Hello World Error")
      }
    }, 1000)
  })
}

retry(test, { count: 5, delay: (retryCount) => {
  console.log(retryCount)
  return retryCount * 1000
} })
    .then((res) => console.log('res', res))
    .catch((err) => console.log('err', err))

function retry(promiseFn, config) {
  let retryCount = 0
  
  return new Promise((resolve, reject) => {

    function doFinalCheck() {
      retryCount += 1

      if (retryCount >= config.count) {
        return reject(new Error('Количество попыток исчерпано'))
      }
      
      const delayMs = config.delay(retryCount)
      setTimeout(() => {
        tryPromiseFn()
      }, delayMs)
    }
    
    const tryPromiseFn = () => {
      try {
        promiseFn()
          .then((result) => {
            resolve(result);
          })
          .catch(() => doFinalCheck());
      } catch {
        doFinalCheck()
      }
    };


    tryPromiseFn();

  });
}