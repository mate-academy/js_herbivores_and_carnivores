'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.addAliveAnimal(this);
  }

  static addAliveAnimal(animal) {
    this.alive.push(animal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;

      if (animal.health === 0) {
        const deleteIndex = Animal.alive.findIndex(item => item === animal);

        delete Animal.alive[deleteIndex];
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
