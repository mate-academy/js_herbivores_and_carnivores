'use strict';

class Animal {
  // static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (!((animal instanceof Carnivore) || (animal.hidden === true))) {
      if (animal.health > 50) {
        animal.health -= 50;
      } else {
        const index = Animal.alive.indexOf(animal);

        delete Animal.alive[index];
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
