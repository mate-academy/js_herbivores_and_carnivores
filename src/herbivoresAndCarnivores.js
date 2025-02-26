'use strict';

class Animal {
  static HEALTH = 100;
  static alive = [];

  constructor(name, health = Animal.HEALTH) {
    this.name = name;
    this.health = health;
    this.hidden = false;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  static DAMAGE = 50;

  bite(target) {
    if (!target.hidden && target instanceof Herbivore) {
      target.health -= Carnivore.DAMAGE;

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
