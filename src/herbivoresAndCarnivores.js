'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

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
  constructor(name, hide) {
    super(name);
  }

  bite(victim) {
    const animal = Animal.alive.find(elem => elem === victim);

    if (animal.hidden !== true && !(animal instanceof Carnivore)) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.alive.splice([Animal.alive.indexOf(animal)], 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
