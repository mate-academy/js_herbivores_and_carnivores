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
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(bitenAnimal) {
    if (bitenAnimal.hidden !== undefined && !bitenAnimal.hidden) {
      bitenAnimal.health -= 50;
    }

    if (bitenAnimal.health === 0) {
      const index = Animal.alive.findIndex(obj => obj === bitenAnimal);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
