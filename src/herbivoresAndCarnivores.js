'use strict';

class Animal {
  static alive = [];
  static fullHealth = 100;

  constructor(name) {
    this.health = Animal.fullHealth;
    this.name = name;
    Animal.addAlive(this);
  }

  static addAlive(animal) {
    this.alive.push(animal);
  }

  static removeDead() {
    this.alive = this.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  static damage = 50;
  static fullDamage = 0;

  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= Carnivore.damage;

      if (victim.health === Carnivore.fullDamage) {
        Animal.removeDead();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
