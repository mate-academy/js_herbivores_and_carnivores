'use strict';

class Animal {
  static addToAlive(animal) {
    Animal.alive.push(animal);
  }

  static removeFromAlive(alive) {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.addToAlive(this);
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
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      Animal.removeFromAlive(Animal.alive);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
