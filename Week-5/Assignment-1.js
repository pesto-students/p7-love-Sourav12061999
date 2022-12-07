function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doTask1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomRange(1, 10) > 5) {
        resolve("Resolve Greater than 5");
      } else {
        reject("Reject Less Than 5");
      }
    }, 2000);
  });
}
function doTask2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomRange(1, 10) > 3) {
        resolve("Resolve Greater than 3");
      } else {
        reject("Reject Less Than 3");
      }
    }, 2000);
  });
}
function doTask3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomRange(1, 10) > 7) {
        resolve("Resolve Greater than 7");
      } else {
        reject("Reject Less Than 7");
      }
    }, 2000);
  });
}

function myParser(task, generator) {
  const iterator = generator();
  try {
    task().then((res) => {
      iterator.next(res);
      iterator.next(res);
    });
  } catch (error) {
    console.log(error);
  }
}

function* myGenerator() {
  const res = yield;
  console.log(res);
}

myParser(doTask1, myGenerator);
myParser(doTask2, myGenerator);
myParser(doTask3, myGenerator);
