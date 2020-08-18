'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    this.hidden = false;
    Animal.alive.push(this);
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = !this.hidden;
  };
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(animal), 1);
      }
    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
