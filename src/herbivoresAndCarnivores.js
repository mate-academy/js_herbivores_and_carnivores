'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
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
  bite(herb) {
    if (herb instanceof Herbivore && !herb.hidden) {
      herb.health -= 50;
    }

    if (herb.health === 0) {
      Animal.alive = Animal.alive.filter(critter => critter !== herb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
