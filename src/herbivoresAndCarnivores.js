'use strict';

class Animal {
  constructor() {
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor() {
    super();

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if (obj.hidden === false) {
      obj.health -= 50;
    }

    if (obj.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== obj);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
