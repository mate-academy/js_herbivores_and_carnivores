'use strict';

class Animal {
  static alive = [];

  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  isAlive() {
    return this.health > 0;
  }

  die() {
    const index = Animal.alive.findIndex((a) => a === this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }

  changeHealth(amount) {
    this.health += amount;

    if (this.health <= 0) {
      this.die();
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(health, name);
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.changeHealth(-50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
