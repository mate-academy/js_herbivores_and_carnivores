'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index > -1) {
      Animal.alive.splice(index, 1);
    }
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      animal.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
