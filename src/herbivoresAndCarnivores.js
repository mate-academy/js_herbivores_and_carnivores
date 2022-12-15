'use strict';

class Animal {
  static addToAlive(animal) {
    this.alive.push(animal);
  }

  static removeFromAlive() {
    this.alive = this.alive.filter(animal => animal.health);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.addToAlive(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

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
      Animal.removeFromAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
