'use strict';

const INITIAL_HEALTH_VALUE = 100;
const HEALTH_BITE_DECREASE = 50;

class Animal {
  static alive = [];

  constructor(name, health = INITIAL_HEALTH_VALUE) {
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
  bite(prey) {
    const canBeBitten = prey instanceof Herbivore && !prey.hidden;

    if (canBeBitten) {
      prey.health -= HEALTH_BITE_DECREASE;

      if (prey.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(prey), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
