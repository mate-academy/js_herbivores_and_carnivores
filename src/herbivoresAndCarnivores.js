'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (!beast.hidden && beast instanceof Herbivore) {
      beast.health -= 50;
    }

    if (beast.health <= 0) {
      const beastInAlive = Animal.alive.indexOf(beast);

      Animal.alive.splice(beastInAlive, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
