'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(otherAnimal) {
    if (otherAnimal instanceof Herbivore && !otherAnimal.hidden) {
      otherAnimal.health -= 50;
    }

    if (otherAnimal.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== otherAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
