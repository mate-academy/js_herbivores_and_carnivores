'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  };
};

Animal.__proto__.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };

  hide() {
    this.hidden = !this.hidden;
  };
};

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hidden === false && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    };

    if (herbivore.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(herbivore), 1);
    };
  };
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
