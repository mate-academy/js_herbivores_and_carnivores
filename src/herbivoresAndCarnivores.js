'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(name) {
    const bittenAnimal = Animal.alive.find(animal => animal === name);

    if (bittenAnimal instanceof Herbivore && bittenAnimal.hidden === false) {
      bittenAnimal.health -= 50;

      if (bittenAnimal.health <= 0) {
        Animal.alive = Animal.alive.filter(animal => animal !== bittenAnimal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
