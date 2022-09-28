'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  };

  static died(animal) {
    this.alive = this.alive.filter(creature => creature !== animal);
  };
};

Animal.alive = [];

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  }
};

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    };

    if (animal.health === 0) {
      Animal.died(animal);
    }
  };
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
