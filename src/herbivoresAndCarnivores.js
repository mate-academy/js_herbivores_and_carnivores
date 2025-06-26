'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  changeHealth(amount) {
    this.health += amount;
  }

  isAlive() {
    return this.health > 0;
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
  bite(target) {
    if (!(target instanceof Herbivore)) {
      return;
    }

    if (target.hidden) {
      return;
    }

    target.changeHealth(-50);

    Animal.alive = Animal.alive.filter((animal) => animal.isAlive());
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
