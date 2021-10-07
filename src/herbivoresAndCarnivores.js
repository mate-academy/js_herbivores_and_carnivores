'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }

  bite(animal) {
    Animal.alive.map((person, index) => {
      // eslint-disable-next-line max-len
      if (person === animal && animal.constructor.name === 'Herbivore' && person.hidden !== true) {
        person.health -= 50;

        if (person.health === 0) {
          Animal.alive.splice(index);
        }
      }
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
