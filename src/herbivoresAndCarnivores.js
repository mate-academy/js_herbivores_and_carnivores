'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast instanceof Herbivore && beast.hidden === false) {
      beast.health -= 50;
    }
    Animal.alive = Animal.alive.filter(each => each.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
