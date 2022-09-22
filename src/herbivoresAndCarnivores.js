'use strict';

class Animal {
  static addAlive(animal) {
    this.alive.push(animal);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    this.hidden = false;

    Animal.addAlive(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    Animal.addAlive(this);
  }

  bite(name) {
    if (name.hidden === false && name instanceof Herbivore) {
      name.health -= 50;
    }

    if (name.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== name)
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
