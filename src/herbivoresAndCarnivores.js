'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static updateAliveAnimals() {
    this.alive = this.alive.filter(animal => animal.health > 0);
  };
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
};

class Carnivore extends Animal {
  bite(someone) {
    if (someone instanceof Herbivore && !someone.hidden) {
      someone.health -= 50;
    }
    Animal.updateAliveAnimals();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
