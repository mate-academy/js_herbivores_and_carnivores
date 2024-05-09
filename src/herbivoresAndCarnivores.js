'use strict';

const FULL_HEALTH = 100;
const BITE_DAMAGE = 50;
const CRITICAL_BLEEDING = 0;

class Animal {
  static alive = [];

  health = FULL_HEALTH;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(object) {
    if (object.hidden || object instanceof Carnivore) {
      return;
    }

    object.health -= BITE_DAMAGE;

    Animal.alive = Animal.alive.filter(
      (animal) => animal.health > CRITICAL_BLEEDING,
    );
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
