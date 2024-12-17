'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  isAlive() {
    return this.health > 0;
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index > -1) {
      Animal.alive.splice(index, 1);
    }
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

  reveal() {
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }

  bite(herbivore) {
    if (herbivore !== null || herbivore !== undefined) {
      if (herbivore instanceof Herbivore && !herbivore.hidden) {
        herbivore.health -= 50;

        if (!herbivore.isAlive()) {
          herbivore.die();
        }
      }
    } else {
      return false;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
