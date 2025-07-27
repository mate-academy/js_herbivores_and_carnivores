'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  bite(sh) {
    if (sh.hidden === false && sh instanceof Herbivore && sh.health > 0) {
      sh.health -= 50;
    }

    if (sh.health <= 0) {
      sh.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
