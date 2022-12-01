class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Teacher extends Person {
  constructor(name, age, gender, subject) {
    super(name, age, gender);
    this.subject = subject;
  }

  teach() {
    return `${this.name} is now teaching ${this.subject}`;
  }
}

const teacher = new Teacher("Sourav", 23, "Male", "Javascript");

console.log(teacher.teach());
