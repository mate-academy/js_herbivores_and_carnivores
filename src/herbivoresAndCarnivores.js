'use strict';

const DEFAULT_HEALTH = 100;

class Animal {
  static alive = [];

  constructor(name, health = DEFAULT_HEALTH) {
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
  BITE_DAMAGE = 50;

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= this.BITE_DAMAGE;
    }

    Animal.alive = Animal.alive.filter((beast) => beast.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
