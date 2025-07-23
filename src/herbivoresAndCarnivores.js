'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hidden = false;

  constructor(name, health = 100) {
    super(name, health);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      animal.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
