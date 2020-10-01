'use strict';

class Animal {
  static create(animal) {
    this.alive.push(animal);
  }

  static delete(animal) {
    this.alive.splice(this.alive.indexOf(animal), 1);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.create(this);
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
  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      Animal.delete(herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
