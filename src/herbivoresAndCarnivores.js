'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    const indexFound = Animal.alive.findIndex(
      (animal) => animal.name === this.name,
    );

    if (indexFound === -1) {
      Animal.alive.push(this);
    }
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
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  bite(victim) {
    if (!(victim instanceof Herbivore)) {
      return;
    }

    if (!victim.hidden) {
      victim.health -= 50;
    }

    if (!victim.health) {
      Animal.alive = Animal.alive.filter(x => x.name !== victim.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
