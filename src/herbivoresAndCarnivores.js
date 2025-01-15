'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }

  isAlive() {
    return this.health > 0;
  }

  updateHealth() {
    if (this.health <= 0) {
      this.die();
    }
  }
}

class Herbivore extends Animal {
  // write your code here
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }

  bite(herbivore) {
    if (
      herbivore instanceof Herbivore &&
      herbivore.isAlive() &&
      !herbivore.hidden
    ) {
      herbivore.health -= 50;
      herbivore.updateHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
