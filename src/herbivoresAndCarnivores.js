'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
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
  bite(animalForDinner) {
    if (
      !animalForDinner.hidden
      && animalForDinner instanceof Herbivore
    ) {
      animalForDinner.health -= 50;
    }
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
