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
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health = animal.health - 50;
    }

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(v => v !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
