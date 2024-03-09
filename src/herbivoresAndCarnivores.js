'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
  }

  bite(animal) {
    if (!(animal.hasOwnProperty(Carnivore)) && animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.alive.forEach((element, index) => {
        if (element.name === animal.name) {
          delete Animal.alive[index];
        }
      });
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
