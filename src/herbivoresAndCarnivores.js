'use strict';

class Animal {
  static alive = [];

  constructor(health = 100, name) {
    if (typeof health === 'string') {
      this.name = health;
      this.health = 100;
    } else {
      this.health = health;
      this.name = name;
    }
    this.hidden = false;

    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      Animal.removeDeadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
