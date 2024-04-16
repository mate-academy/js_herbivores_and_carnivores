'use strict';

class Animal {
  static alive = [];
  static FULL_HEALTH = 100;

  constructor(health = Animal.FULL_HEALTH, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
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
    const HEALTH_REDUCTION_ON_BITE = 50;

    if (target instanceof Herbivore && !target.hidden) {
      target.health -= HEALTH_REDUCTION_ON_BITE;

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
