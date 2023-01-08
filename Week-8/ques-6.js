// Que with stack;

class Que {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  add(value) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);

    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop());
    }
  }
  pop() {
    return this.stack1.pop();
  }
}

const que = new Que();
que.add(1);
console.log(que);
que.add(2);
console.log(que);
que.add(3);
console.log(que);
que.add(4);
console.log(que);
