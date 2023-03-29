'use strict';

class Animal {
  constructor(
    name,
    health = 100
  ) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health < 50) {
      Animal.alive = Animal.alive.filter(alived => alived.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
