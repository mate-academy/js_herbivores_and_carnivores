'use strict';

class Animal {
  static alive = [];

  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  checkHealth() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  /**
   * @param {Animal} target
   */
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    }
    this.checkHealth();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
