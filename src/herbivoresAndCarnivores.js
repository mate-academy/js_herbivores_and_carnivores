'use strict';

class Animal {
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(health, name);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(health, name);
  }

  bite(bittenAnimal) {
    if (bittenAnimal instanceof Herbivore && !bittenAnimal.hidden) {
      bittenAnimal.health -= 50;
    }

    if (bittenAnimal.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== bittenAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
