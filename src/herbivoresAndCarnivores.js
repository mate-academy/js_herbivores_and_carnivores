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
      const index = Animal.alive.indexOf(this);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
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
  // Конструктор видалено, оскільки він повністю повторював батьківський

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
