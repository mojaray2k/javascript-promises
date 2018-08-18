// Promise.race()
// when you only want the result from the first
// resolve promise

let p1 = Promise.reject(111);

let p2 = Promise.resolve(222);

let p3 = new Promise((resolve, reject) => {
     setTimeout(resolve, 1000, 333);
});

Promise.race([p1, p2, p3])
  .then((result) => {
    console.log("winning: ", result);
  })
  .catch((result) => {
    console.log("failed: ", result);
  })

  Promise.race([p2, p1, p3])
  .then((result) => {
    console.log("winning: ", result);
  })
  .catch((result) => {
    console.log("failed: ", result);
  })

  // The p2 is going to fire first because the p3 has a setTimeout
  Promise.race([p3, p2, p1])
  .then((result) => {
    console.log("winning: ", result);
  })
  .catch((result) => {
    console.log("failed: ", result);
  })

