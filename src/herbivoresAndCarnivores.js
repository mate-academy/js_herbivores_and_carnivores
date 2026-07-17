'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

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
  bite(species) {
    if (species instanceof Herbivore && species.hidden === false) {
      species.health -= 50;
    }

    const dead = Animal.alive.find((el) => el.health <= 0);

    if (dead) {
      Animal.alive = Animal.alive.filter((el) => el !== dead);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
