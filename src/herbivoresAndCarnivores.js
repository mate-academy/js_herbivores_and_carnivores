'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);

    this.hidden = hidden || false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if (obj.hidden || obj instanceof Carnivore) {
      return;
    }

    obj.health -= 50;

    const removeAnimal = Animal.alive.findIndex((animal) => animal.health <= 0);

    if (removeAnimal !== -1) {
      Animal.alive.splice(removeAnimal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
