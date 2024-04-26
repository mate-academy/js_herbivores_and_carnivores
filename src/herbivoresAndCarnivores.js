'use strict';

const DEFAULT_HEALTH = 100;
const DAMAGE_AMOUNT = 50;

class Animal {
  static alive = [];

  constructor(name, health = DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter(({ health }) => health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  takeDamage() {
    if (!this.hidden) {
      this.health -= DAMAGE_AMOUNT;
    }

    if (this.health <= 0) {
      Animal.removeDeadAnimals();
    }
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore) {
      target.takeDamage();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
