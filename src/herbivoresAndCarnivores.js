'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  };
};

class Herbivore extends Animal {
  constructor(beast) {
    super(beast);
    this.hidden = false;
  };

  hide() {
    this.hidden = !this.hidden;
  };
};

class Carnivore extends Animal {
  bite(beast) {
    if (beast instanceof Herbivore && !beast.hidden) {
      beast.health -= 50;

      if (beast.health <= 0) {
        Animal.alive = Animal.alive.filter(animal => animal.health > 0);
      }
    }
  };
};

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
