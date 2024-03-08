'use strict';

class Animal {
  static alive = [];
  constructor(health = 100, name) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(health, name) {
    super(health, name);
    this.hidden = false;
    this.health = 100;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health, name) {
    super(health, name);
    this.health = 100;

    if (this.health !== 0) {
      Animal.alive.push(this);
    }
  }

  bite(someAnimal) {
    if (someAnimal.hidden !== true && someAnimal instanceof Herbivore) {
      someAnimal.health -= 50;

      if (someAnimal.health <= 0) {
        Animal.alive.pop(someAnimal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
