'use strict';

class Animal {
  static MAX_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = Animal.MAX_HEALTH;
    Animal.alive.push(this);
  }
  static alive = [];
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
    const DAMAGE_AMOUNT = 50;

    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= DAMAGE_AMOUNT;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter((a) => a !== animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
