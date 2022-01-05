'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
    Animal.alive.push(this);
  }

  bite(animal) {
    if (!animal.hidden && animal.__proto__ !== Carnivore.prototype) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      const index = Animal.alive.findIndex(value => value === animal);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
