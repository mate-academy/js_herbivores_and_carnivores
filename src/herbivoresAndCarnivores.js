'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.type = 'herbivore';
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    this.type = 'carnivore';
  }

  bite(animal) {
    if (animal.type === 'herbivore' && animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter((beast) =>
        animal.name !== beast.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
