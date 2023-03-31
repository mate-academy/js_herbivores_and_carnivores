'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    this.alive = [];

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    const isHerbivore = animal instanceof Herbivore;

    if (!isHerbivore || animal.hidden) {
      return;
    }

    animal.health -= 50;

    if (animal.health <= 0) {
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
