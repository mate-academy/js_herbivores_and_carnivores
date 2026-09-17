'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }

  static alive = [];

  static removeAlive(alive) {
    const removeDiedAnimal = alive.filter((animal) => animal.health > 0);

    return removeDiedAnimal;
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(...args) {
    super(...args);
    Animal.alive.push(this);
  }
  bite(target) {
    if (target.hidden || target instanceof Carnivore) {
      return;
    }

    target.health -= 50;

    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
