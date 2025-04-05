'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

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
  bite(otherAnimal) {
    if (otherAnimal instanceof Herbivore && !otherAnimal.hidden) {
      otherAnimal.health -= 50;

      if (otherAnimal.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== otherAnimal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
