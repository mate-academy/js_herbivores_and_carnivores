'use strict';

class Animal {
  static get alive() {
    return this._alive || (this._alive = []);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.addToAlive(this);
  }

  static addToAlive(animal) {
    this.alive.push(animal);
  }

  static removeFromAlive(animal) {
    this.alive.splice(Animal.alive.indexOf(animal), 1);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }
  bite(animal) {
    if (animal.hidden === true || animal instanceof Carnivore) {
      return;
    }

    animal.health -= 50;

    if (animal.health === 0) {
      Animal.removeFromAlive(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
