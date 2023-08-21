'use strict';

const HEALTH_BY_DEFAULT = 100;
const BITE_VALUE = 50;

class Animal {
  static alive = [];

  constructor(name, health = HEALTH_BY_DEFAULT) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast instanceof Carnivore || beast.hidden) {
      return;
    }

    beast.health -= BITE_VALUE;

    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
