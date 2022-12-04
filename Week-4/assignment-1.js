function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
class myPromise {
  #status;
  #error;
  #data;
  #thenCallback;
  #catchCallback;

  constructor(callback) {
    this.#status = "pending";
    this.#error = null;
    this.#data = null;
    this.#thenCallback = null;
    this.#catchCallback = null;

    const resolve = (data) => {
      this.#status = "resolve";
      this.#data = data;
      setTimeout(() => {
        this.#thenCallback(this.#data);
      }, 5);
    };

    const reject = (err) => {
      this.#status = "reject";
      this.#error = err;
      setTimeout(() => {
        this.#catchCallback(this.#error);
      }, 5);
    };
    callback(resolve, reject);
  }

  then(callback) {
    this.#thenCallback = callback;
  }

  catch(callback) {
    this.#catchCallback = callback;
  }
}

const promise = new myPromise((resolve, reject) => {
  if (randomRange(1, 10) % 5 === 0) {
    resolve("Devided By 5");
  } else {
    reject("Not Devided By 5");
  }
});

promise.then((data) => console.log(data));
promise.catch((err) => console.log(err));
