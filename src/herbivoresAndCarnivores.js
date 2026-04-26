'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  checkTargetHealh(target) {
    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

class Herbivore extends Animal {
    hidden = false;
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!(target instanceof Herbivore) || target.hidden) {
      return;
    }
    target.health -= 50;

    this.checkTargetHealh(target);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
