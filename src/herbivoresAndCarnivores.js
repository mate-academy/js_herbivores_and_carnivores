'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  };
};

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };

  hide() {
    this.hidden = this.hidden === false;
  }
}

class Carnivore extends Animal {
  bite(brute) {
    if (brute instanceof Herbivore && brute.hidden === false) {
      brute.health -= 50;
    };

    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  };
};

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
