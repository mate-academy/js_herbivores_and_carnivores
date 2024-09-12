'use strict';

const DEFAULT_HEALTH = 100;
const BITE_DAMAGE = 50;

class Animal {
  constructor(name, health = DEFAULT_HEALTH) {
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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= BITE_DAMAGE;
    }

    Animal.alive = Animal.alive.filter((zvir) => zvir.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
