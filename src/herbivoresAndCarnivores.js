'use strict';

const HEALTH_BY_DEFAULT = 100;
const DAMAGE_TAKEN = 50;

class Animal {
  static alive = [];

  constructor(name, health = HEALTH_BY_DEFAULT) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  updateAliveStatus() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = HEALTH_BY_DEFAULT) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= DAMAGE_TAKEN;

      target.updateAliveStatus();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
