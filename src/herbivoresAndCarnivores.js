'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animalName) {
    if (animalName instanceof Herbivore && animalName.hidden === false) {
      animalName.health -= 50;
    }

    if (animalName.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== animalName);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
