'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbobore) {
    if (!herbobore.hidden && herbobore instanceof Herbivore) {
      herbobore.health -= 50;
    }

    if (herbobore.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}
Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
