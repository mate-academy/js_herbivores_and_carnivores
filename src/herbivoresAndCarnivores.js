'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeFromAlive(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;

    return this;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    if (!(animal instanceof Carnivore) && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.removeFromAlive(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
