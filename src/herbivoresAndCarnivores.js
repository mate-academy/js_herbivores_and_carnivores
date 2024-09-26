'use strict';

class Animal {
  constructor(name) {
    Animal.alive.push(this);
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = !this.hidden;
  }
  constructor(name) {
    super(name);
    this.hidden = false;
  }
}

Animal.alive = [];

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health === 0) {
        Animal.alive = Animal.alive.filter(animal => animal.health !== 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
