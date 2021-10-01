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
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (!(herbivore instanceof Carnivore) && !herbivore.hidden) {
      herbivore.health = herbivore.health - 50;
    }

    if (herbivore.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(herbivore), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
