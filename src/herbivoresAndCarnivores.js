'use strict';

const DEFAULT_HEALTH = 100;
const DEFAULT_DAMAGE = 50;

class Animal {
  static alive = [];
  constructor(name, health = DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= DEFAULT_DAMAGE;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter(alive => alive !== animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
