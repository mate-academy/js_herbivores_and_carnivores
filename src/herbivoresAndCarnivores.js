'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static animalDied(diedAnimal) {
    Animal.alive = Animal.alive
      .filter((animal) => animal !== diedAnimal);
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
  bite(prey) {
    if (!prey.hidden && prey instanceof Herbivore) {
      prey.health -= 50;
    }

    if (prey.health <= 0) {
      Animal.animalDied(prey);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
