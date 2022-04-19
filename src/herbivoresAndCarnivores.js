'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;

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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(str) {
    if (str instanceof Herbivore && str.hidden === false) {
      str.health -= 50;
    }

    if (str.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(str), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
