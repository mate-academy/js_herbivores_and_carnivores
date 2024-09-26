'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
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
  bite(poorAnimal) {
    if (poorAnimal instanceof Herbivore && !poorAnimal.hidden) {
      poorAnimal.health -= 50;
    }

    if (poorAnimal.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== poorAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
