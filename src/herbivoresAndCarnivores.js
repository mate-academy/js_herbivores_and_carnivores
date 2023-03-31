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
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  bite(animal) {
    const isHerbivore = animal instanceof Herbivore;

    if (!isHerbivore || animal.hidden) {
      return null;
    }

    animal.health -= 50;

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter(
        (storedAnimal) => storedAnimal.name !== animal.name
      );
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
