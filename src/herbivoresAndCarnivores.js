'use strict';

class Animal {
  // write your code here
  static alive = [];
  static animalDied(herbivore) {
    Animal.alive = Animal.alive.filter((animal) => animal.health !== 0);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herbivore) {
    if (herbivore.hidden === false) {
      herbivore.health -= 50;
    }

    Animal.animalDied(herbivore);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
