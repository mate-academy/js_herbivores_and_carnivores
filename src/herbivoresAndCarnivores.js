'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  };

  static deleteDead() {
    this.alive = this.alive.filter(animal => animal.health);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if ((animal instanceof Carnivore) || animal.hidden) {
      return;
    }

    animal.health -= 50;

    if (animal.health === 0) {
      Animal.deleteDead();
    }
  }
}

module.exports = {
  Herbivore,
  Animal,
  Carnivore,
};
