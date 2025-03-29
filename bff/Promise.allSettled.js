// function allSettled(promises) {
//   if (promises.length === 0) {
//     return Promise.resolve([]);
//   }

//   const results = Array(promises.length);
//   let numOfSettledPromise = 0;

//   return new Promise((resolve, reject) => {
//     promises.forEach((promise, i) => {
//       if (!(promise instanceof Promise)) {
//         promise = Promise.resolve(promise);
//       }

//       promise.then(
//         (value) => {
//           results[i] = {
//             status: 'fulfilled',
//             value,
//           };

//           numOfSettledPromise++;
//           if (numOfSettledPromise === promises.length) {
//             resolve(results);
//           }
//         },
//         (reason) => {
//           results[i] = {
//             status: 'rejected',
//             reason,
//           };

//           numOfSettledPromise++;
//           if (numOfSettledPromise === promises.length) {
//             resolve(results);
//           }
//         }
//       );
//     });
//   });
// }

// #2
// function allSettled(promises) {
//   if (promises.length === 0) {
//     return Promise.resolve([]);
//   }

//   const results = Array(promises.length);
//   let numOfSettledPromise = 0;

//   return new Promise((resolve) => {
//     promises.forEach((promise, i) => {
//       if (!(promise instanceof Promise)) {
//         promise = Promise.resolve(promise);
//       }

//       promise // Promise.resolve(promise)
//         .then((value) => {
//           results[i] = { status: 'fulfilled', value };
//         })
//         .catch((reason) => {
//           results[i] = { status: 'rejected', reason };
//         })
//         .finally(() => {
//           numOfSettledPromise++;
//           if (numOfSettledPromise === promises.length) {
//             resolve(results);
//           }
//         });
//     });
//   });
// }

// ---------- ----------

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo"),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

// Expected output:
// "fulfilled"
// "rejected"

Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log(values));

// [
//   { status: 'fulfilled', value: 33 },
//   { status: 'fulfilled', value: 66 },
//   { status: 'fulfilled', value: 99 },
//   { status: 'rejected', reason: Error: an error }
// ]

// Promise.allSettled([
//   Promise.resolve(1),
//   Promise.resolve(2),
//   3,
//   new Promise((resolve) => setTimeout(() => resolve(4), 1000)),
// ]).then((values) => console.log(values));

// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'fulfilled', value: 2 },
//   { status: 'fulfilled', value: 3 },
//   { status: 'fulfilled', value: 4 },
// ]