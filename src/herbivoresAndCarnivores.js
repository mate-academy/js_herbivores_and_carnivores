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
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden !== true && animal instanceof Herbivore) {
      animal.health -= 50;

      if (animal.health === 0) {
        Animal.alive = Animal.alive.filter(creature => creature.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
