'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

Animal.alive = [];

class Carnivore extends Animal {
  bite(animal) {
    if (animal.__proto__ === Herbivore.prototype && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.__proto__ === Herbivore.prototype && animal.health <= 0) {
      Animal.alive.splice(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
