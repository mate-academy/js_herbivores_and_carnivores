'use strict';

class Animal {
  static alive = [];
  constructor(health) {
    const FULL_HEALTH = 100;

    this.health = health;

    this.health = FULL_HEALTH;
    Animal.alive.push(this);
  }
  static animals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super();
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}
class Carnivore extends Animal {
  constructor(name) {
    super();
  }
  bite(target) {
    const BITE_CARNIVORE = 50;

    if (target instanceof Herbivore && !target.hidden) {
      target.health -= BITE_CARNIVORE;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
