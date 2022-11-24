const person1 = {
  name: "Sourav Das",
  job: "Frontend Engineer",
  isMarried: false,
};

const person2 = {
  name: "Amit Kumar",
  job: "Backend Engineer",
  isMarried: true,
};

function intro(frontendScore, backendScore) {
  console.log(
    `Hi, I am ${this.name}. I work as a ${this.job}. I am currently ${
      this.isMarried ? "married" : "not married"
    }`
  );
  console.log(`My Score on frontend is:- ${frontendScore}`);
  console.log(`My Score on backend is:- ${backendScore}`);
}

// Using call
intro.call(person1, 20, 10);
intro.call(person2, 10, 20);
console.log("----------------------------------------");
// Using Apply
intro.apply(person1, [20, 10]);
intro.apply(person2, [10, 20]);
console.log("----------------------------------------");

// Using Bind
let person1Intro = intro.bind(person1, 20, 10);
let person2Intro = intro.bind(person2, 10, 20);

person1Intro();
person2Intro();
