'use strict';

class Animal {
  // static alive = [];

  static consume() {
    this.alive = this.alive.filter(animal => animal.health > 0);
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
  bite(prey) {
    if (prey.hidden !== true && prey instanceof Herbivore) {
      prey.health -= 50;
      Animal.consume();
    };
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
