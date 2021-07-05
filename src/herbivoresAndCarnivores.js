'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
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

    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= damage;
    }

    Animal.alive = Animal.alive.filter(creature => creature.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
