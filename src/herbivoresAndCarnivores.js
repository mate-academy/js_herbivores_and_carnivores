'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(beast) {
    if (beast instanceof Herbivore
      && !beast.hidden) {
      beast.health -= 50;

      Animal.alive = Animal.alive.filter(bittenBeast => {
        return bittenBeast.health <= 0;
      });
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
