'use strict';

class Animal {
  static alive = [];
  constructor(health, name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
  static removeFromAlive(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
  }
}

class Herbivore extends Animal {
  constructor(health, name, hidden) {
    super(health, name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Herbivore) || animal.hidden) {
      return;
    }
    animal.health -= 50;

    if (animal.health <= 0) {
      Animal.removeFromAlive(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
