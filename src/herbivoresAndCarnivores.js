'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }
  bite(beast) {
    if (beast instanceof Herbivore
      && beast.hidden === false
      && beast.health > 0) {
      beast.health -= 50;

      Animal.alive = Animal.alive.filter(bittenBeast => {
        return bittenBeast.health !== 0;
      });
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
