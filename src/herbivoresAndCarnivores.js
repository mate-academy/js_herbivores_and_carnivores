'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
  static alive = [];

  static removeFromAlive(animal) {
    const index = Animal.alive.indexOf(animal);

    Animal.alive.splice(index, 1);
  }

  setHealth(health) {
    this.health = health;

    if (this.health <= 0) {
      Animal.removeFromAlive(this);
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

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === true || animal instanceof Carnivore) {
      return;
    }
    animal.health -= 50;
    animal.setHealth(animal.health);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
