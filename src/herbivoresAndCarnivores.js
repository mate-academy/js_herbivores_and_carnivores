'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

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
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }

  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden && victim.health > 0) {
      victim.health -= 50;

      if (victim.health <= 0) {
        Animal.removeDeadAnimals();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
