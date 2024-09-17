'use strict';

class Animal {
  static addAlive(animal) {
    this.alive.push(animal);
  };

  static removeFromAlive(herb) {
    this.alive = this.alive.filter(animal => animal !== herb);
  }

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.addAlive(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden) {
    super(name);

    this.hidden = hidden || false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, bite) {
    super(name);

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
