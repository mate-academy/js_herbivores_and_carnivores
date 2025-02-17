'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  isAlive() {
    return this.health > 0;
  }

  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
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
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }

  bite(herbivore) {
    // eslint-disable-next-line max-len
    if (
      herbivore instanceof Herbivore &&
      !herbivore.hidden &&
      this !== herbivore &&
      this.isAlive()
    ) {
      // Check if carnivore is alive
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        herbivore.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
