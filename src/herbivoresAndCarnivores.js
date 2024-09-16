'use strict';

class Animal {
  static alive = [];
  constructor(health, name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(health, name) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(someAnimal) {
    if (someAnimal.hidden !== true && someAnimal instanceof Herbivore) {
      someAnimal.health -= 50;

      if (someAnimal.health <= 0) {
        delete Animal.alive.someAnimal;
        Animal.alive.length--;
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
