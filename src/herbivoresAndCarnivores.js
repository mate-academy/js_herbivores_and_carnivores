'use strict';

class Animal {
  // static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (!animal.hidden && !(animal instanceof Carnivore)) {
      animal.health -= 50;
    }

    if (animal.health < 1) {
      Animal.alive.splice(Animal.alive.indexOf(animal), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
