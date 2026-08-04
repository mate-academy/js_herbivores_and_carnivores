'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  _updateStatus() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

class Herbivore extends Animal {
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
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
      target._updateStatus();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
