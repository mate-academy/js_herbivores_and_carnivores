'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  isAnimalAlive() {
    if (this.health <= 0) {
      const index = Animal.alive.indexOf(this);

      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
      animal.isAnimalAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
