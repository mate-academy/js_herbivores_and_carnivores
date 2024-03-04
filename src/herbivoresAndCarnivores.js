'use strict';

const MAX_HEALTH = 100;
const BITE_DAMAGE = 50;

class Animal {
  static alive = [];
  static die() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }

  constructor(name, health = MAX_HEALTH) {
    this.name = name;
    this.health = health;
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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= BITE_DAMAGE;
    }

    if (animal.health <= 0) {
      Animal.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
