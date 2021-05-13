'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (!herbivore.hidden && !(herbivore instanceof Carnivore)) {
      herbivore.health -= 50;
      Animal.alive.splice(Animal.alive.indexOf(herbivore), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
