'use strict';

class Animal {
  static addAlive(animal) {
    Animal.alive.push(animal);
  }

  static removeNotAlive(animal) {
    Animal.alive = Animal.alive.filter(beast => beast !== animal);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;

    Animal.addAlive(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      Animal.removeNotAlive(victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
