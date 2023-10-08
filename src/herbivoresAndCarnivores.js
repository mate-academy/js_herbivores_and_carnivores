'use strict';

class Animal {
  static addAlive(animal) {
    this.alive.push(animal);
  };

  static removeFromAlive(animal) {
    const indexOfAnimal = this.alive.indexOf(animal);

    this.alive[indexOfAnimal] = 0;
  }

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden) {
    super(name);

    this.hidden = hidden || false;

    Animal.addAlive(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, bite) {
    super(name);

    Animal.addAlive(this);
  }

  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health === 0) {
      Animal.removeFromAlive(herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
