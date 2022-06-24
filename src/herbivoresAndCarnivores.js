'use strict';

class Animal {
  static isAlive() {
    Animal.alive = Animal.alive.filter(beast => beast.health > 0);
  }

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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
      Animal.isAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
