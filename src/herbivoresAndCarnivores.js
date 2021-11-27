'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden === false ? this.hidden = true : this.hidden = false;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal.hidden !== true && animal instanceof Herbivore) {
      animal.health -= 50;

      if (animal.health === 0) {
        delete Animal.alive[Animal.alive.indexOf(animal)];
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
