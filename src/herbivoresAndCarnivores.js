'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = hidden || false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target.hidden === false) {
      target.health -= 50;
    }

    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
