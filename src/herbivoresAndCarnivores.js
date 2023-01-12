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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden
      && !(animal instanceof Carnivore)) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      const i = Animal.alive.indexOf(animal);

      Animal.alive.splice(i);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
