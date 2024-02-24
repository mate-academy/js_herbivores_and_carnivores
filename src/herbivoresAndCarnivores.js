'use strict';

class Animal {
  // write your code here

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast instanceof Herbivore && beast.hidden === false) {
      beast.health -= 50;
    }

    if (beast.health === 0) {
      const indexForDelete = Animal.alive.indexOf(beast);

      Animal.alive.splice(indexForDelete, 1);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
