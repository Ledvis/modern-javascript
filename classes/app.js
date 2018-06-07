class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  greetings() {
    return `Hello there ${this.name} ${this.surname}`;
  }
}

class Customer extends Person {
  constructor(name, surname, phone, membership) {
    super(name, surname);
    this.phone = phone;
    this.membership = membership;
  }

  sayYourName() {
    console.log(this.name);
  }
}

const zhenya = new Customer('Zhenya', 'Fedyai', '098 827 45 93', 'Standard');