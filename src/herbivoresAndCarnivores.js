'use strict';
class Animal {
  static DEFAULT_HEALTH = 100;
  static alive = [];

  constructor(name, health = Animal.DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  static HEALTH_REDUCTION = 50;

  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  receiveBite() {
    if (!this.hidden) {
      this.health -= Herbivore.HEALTH_REDUCTION;
    }

    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((creature) => creature.health > 0);
    }
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore) {
      target.receiveBite();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
