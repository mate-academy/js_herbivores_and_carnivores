'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    const damage = 50;

    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= damage;
    }

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(beast => beast.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
