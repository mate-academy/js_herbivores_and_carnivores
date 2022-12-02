'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  bite(herbivores) {
    if (herbivores instanceof Herbivore && !herbivores.hidden) {
      herbivores.health -= 50;
    }

    if (herbivores.hidden <= 0) {
      delete Animal.alive[Animal.alive.indexOf(herbivores)];
    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
