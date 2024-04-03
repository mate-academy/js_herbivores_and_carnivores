'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    if (!Animal.alive) {
      Animal.alive = [];
    }

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (
      herbivore instanceof Herbivore === true &&
      herbivore.health === 50 &&
      herbivore.hidden === false
    ) {
      Animal.alive.splice(Animal.alive.indexOf(herbivore), 1);
    } else if (
      herbivore instanceof Herbivore === true &&
      herbivore.health === 100 &&
      herbivore.hidden === false
    ) {
      herbivore.health = 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
