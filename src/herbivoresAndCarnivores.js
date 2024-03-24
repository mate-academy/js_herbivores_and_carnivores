'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }

  filterAnimal() {
    if (Animal.alive.length > 0) {
      Animal.alive = Animal.alive.filter((item) => item.health > 0);
    }
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (
      Animal.alive.includes(animal) &&
      animal instanceof Herbivore &&
      animal.hidden === false
    ) {
      animal.health -= 50;
      this.filterAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
