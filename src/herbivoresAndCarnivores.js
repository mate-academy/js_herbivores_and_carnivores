'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;

    return this.hidden;
  }

  isHide() {
    return this.hidden;
  }

  bitten(health) {
    this.health = health <= this.health
      ? this.health - health
      : 0;
  }

  isDead() {
    return this.health <= 0;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.biteHealth = 50;
  }

  bite(animal) {
    if (animal instanceof Carnivore) {
      return;
    }

    if (animal instanceof Herbivore && (animal.isHide() || animal.isDead())) {
      return;
    }

    animal.bitten(this.biteHealth);

    if (animal.isDead()) {
      const key = Animal.alive.findIndex(x => x === animal);

      if (key) {
        Animal.alive.splice(key, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
