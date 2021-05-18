'use strict';

class Animal {
  constructor(name, heal = 100) {
    this.name = name;
    this.health = heal;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, heal) {
    super(name, heal);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    Animal.alive.splice(beast => beast.health <= 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
