'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(animalBite) {
    if (animalBite instanceof Herbivore && !animalBite.hidden) {
      animalBite.health -= 50;
    }

    if (animalBite.health === 0) {
      Animal.alive = Animal.alive.filter(
        (animal) => animal.name !== animalBite.name,
      );
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
