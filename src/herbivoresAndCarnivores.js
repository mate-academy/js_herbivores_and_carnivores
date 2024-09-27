'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;

    Animal.alive.push(this);
  }

  checkHealth() {
    return this.health <= 0;
  }

  static updateAliveList() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.checkHealth()) {
        target.constructor.updateAliveList();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
