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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(value) {
    if (value instanceof Herbivore && value.hidden === false) {
      value.health -= 50;
    }

    Animal.alive = Animal.alive.filter(health => health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
