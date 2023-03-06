'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static animalDeath(deathOfAnimal) {
    Animal.alive = Animal.alive
      .filter(animal => animal.name !== deathOfAnimal.name);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100,) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    if (animal instanceof Carnivore || animal.hidden) {
      return;
    }
    animal.health -= 50;

    if (animal.health <= 0) {
      Animal.animalDeath(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
