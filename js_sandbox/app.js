const personPrototype = {
  greeting() {
    return `Hello there ${this.name} ${this.surname}`;
  },
  getsMarried(newSurname) {
    this.surname = newSurname;
  }
}

const mary = Object.create(personPrototype);

mary.name = 'Marry';
mary.surname = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

const zhenya = Object.create(personPrototype, {
  name: {
    value: 'Zhenya'
  },
  surname: {
    value: 'Fedyai'
  },
  age: {
    value: 27
  }
});

console.log(zhenya);