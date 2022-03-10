'use strict';

class Animal {
  static checkAlive() {
    this.alive = this.alive.filter(a => a.health > 0);
  }
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
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
      Animal.checkAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
