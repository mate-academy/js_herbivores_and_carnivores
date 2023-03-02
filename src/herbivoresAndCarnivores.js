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
  constructor(
    health,
    name,
    hidden = false) {
    super(health, name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(
    health,
    name,
    bite1) {
    super(health, name);
  }

  bite(prey) {
    if (prey.hidden === false && prey instanceof Animal) {
      prey.health -= 50;
    }

    for (let i = 0; i < Animal.alive.length; i++) {
      if (Animal.alive[i].health === 0) {
        delete Animal.alive[i];
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
