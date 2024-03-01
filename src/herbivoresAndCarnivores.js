'use strict';

const AMOUNT_OF_HEALTH = 100;
const BITE_DAMAGE = 50;

class Animal {
  static alive = [];

  health = AMOUNT_OF_HEALTH;

  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= BITE_DAMAGE;
    }

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter(beast => beast !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
