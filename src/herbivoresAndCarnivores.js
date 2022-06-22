'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor() {
    super();

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(person) {
    if (person instanceof Herbivore && !person.hidden) {
      person.health -= 50;
    }

    Animal.alive = Animal.alive.filter(animal => animal.health);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
