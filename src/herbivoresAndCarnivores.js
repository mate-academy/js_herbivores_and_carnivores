'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  };

  bite(person) {
    if (person instanceof Herbivore && person.hidden === false) {
      person.health -= 50;
    }

    if (person.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal.name !== person.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
