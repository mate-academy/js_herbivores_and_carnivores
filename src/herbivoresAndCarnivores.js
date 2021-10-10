'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  // static alive = [];
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = !this.hiden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false && animal instanceof Herbivore) {
      animal.health = animal.health - 50;
    }

    Animal.alive = Animal.alive.filter(elem => elem.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
