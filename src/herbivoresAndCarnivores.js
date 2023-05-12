'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
      this.aliveFilter();
    }
  }

  aliveFilter() {
    Animal.alive = Animal.alive.filter(beast => beast.health > 0);
  };
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
