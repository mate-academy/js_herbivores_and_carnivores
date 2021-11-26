'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);

    Animal.alive.push(this);
  }

  bite(animal) {
    if (!animal.hidden && animal.__proto__ !== Carnivore.prototype) {
      animal.health -= 50;
    }

    if (!animal.health) {
      const index = Animal.alive.indexOf(animal);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
