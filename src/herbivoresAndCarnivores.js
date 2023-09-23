'use strict';

class Animal {
  constructor(health, name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  static deadAnimals() {
    Animal.alive = Animal.alive.filter(
      animal => animal.health > 0);
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
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.deadAnimals();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
