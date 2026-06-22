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

  checkLife() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  /**
   * @param {string} name
   */
  constructor(name) {
    super(name);
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
    if (target instanceof Carnivore || target.hidden) {
      return;
    }

    target.health -= 50;
    target.checkLife();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
