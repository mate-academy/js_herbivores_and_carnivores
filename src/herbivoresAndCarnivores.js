'use strict';

class Animal {
  static alive = [];

  static removeFromAlive(instance) {
    this.alive = this.alive.filter((a) => a !== instance);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  takeDamage(amount) {
    this.health -= amount;

    return this.health <= 0;
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
    if (!(animal instanceof Herbivore)) {
      return;
    }

    if (animal.hidden) {
      return;
    }

    const isDead = animal.takeDamage(50);

    if (isDead) {
      Animal.removeFromAlive(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
