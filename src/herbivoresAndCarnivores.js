'use strict';

class Animal {
  static alive = [];

  /**
   * @param {string} name
   * @param {number} [health=100]
   */
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  /**
   * @param {string} name
   * @param {number} [health=100]
   */
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  /**
   * @param {Animal} target
   */
  bite(target) {
    if (!(target instanceof Herbivore) || target.hidden) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
