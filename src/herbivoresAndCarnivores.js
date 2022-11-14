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
  bite(herbivoreName) {
    if (herbivoreName instanceof Herbivore && !herbivoreName.hidden) {
      herbivoreName.health -= 50;
    };

    if (herbivoreName.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(herbivoreName, 1));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
