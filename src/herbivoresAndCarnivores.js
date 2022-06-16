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
  }
}

class Carnivore extends Animal {
  bite(huntedAnimal) {
    if (huntedAnimal.hidden === false && huntedAnimal instanceof Herbivore) {
      huntedAnimal.health -= 50;
    }

    if (huntedAnimal.health <= 0) {
      const deadAnimal = Animal.alive.indexOf(huntedAnimal);

      if (deadAnimal !== -1) {
        Animal.alive.splice(deadAnimal, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
