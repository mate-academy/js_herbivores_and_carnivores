'use strict';

class Animal {
  static alive = [];

  constructor(name = 'unknown', health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(someAnimal) {
    if (someAnimal instanceof Herbivore && someAnimal.hidden === false) {
      someAnimal.health -= 50;
    }

    if (someAnimal.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(someAnimal), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
