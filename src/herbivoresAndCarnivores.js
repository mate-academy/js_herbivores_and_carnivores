'use strict';

const defoultHealth = 100;
const biteCount = 50;

class Animal {
  constructor(name, health = defoultHealth) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  static removeAnimal() {
    Animal.alive = Animal.alive.filter((animalItem) => animalItem.health > 0);
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
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= biteCount;

      if (animal.health <= 0) {
        Animal.removeAnimal();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
