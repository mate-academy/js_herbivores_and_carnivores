'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
    this.hidden = false;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      // remove animal from Animal.alive array if 'bite' takes health to zero
      if (animal.health > 50) {
        animal.health -= 50;
      } else {
        Animal.alive.splice(Animal.alive.indexOf(animal), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
