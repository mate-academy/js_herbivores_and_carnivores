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
  bite(meet) {
    if (!meet.hidden && meet instanceof Herbivore) {
      meet.health -= 50;
      Animal.alive = Animal.alive.filter(beast => beast.healh > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
