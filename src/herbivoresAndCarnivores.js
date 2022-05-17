'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(hidden) {
    super(hidden);
    this.hidden = false;
  }
  hide(hidden) {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (herb.hidden === false) {
      herb.health -= 50;

      if (herb.health === 0) {
        Animal.alive = Animal.alive.filter((animal) => animal.health !== 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
