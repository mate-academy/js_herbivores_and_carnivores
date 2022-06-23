'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore === true && animal.hidden === false) {
      animal.health -= 50;
    }
    Animal.alive = Animal.alive.filter((herbivore) => herbivore.health > 0); ;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
