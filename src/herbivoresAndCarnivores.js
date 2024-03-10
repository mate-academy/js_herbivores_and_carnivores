'use strict';

const HEALTH_DEFAULT = 100;

class Animal {
  constructor(name, health = HEALTH_DEFAULT, hidden) {
    this.health = health;
    this.name = name;
    this.hidden = hidden || false;
    Animal.alive.push(this);
  }

  isAlive() {
    return this.health > 0;
  }

  decreaseHealth(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.health = 0;
      Animal.removeFromAlive(this);
    }
  }

  static removeFromAlive(animal) {
    const index = Animal.alive.indexOf(animal);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
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

Animal.alive = [];

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.decreaseHealth(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
