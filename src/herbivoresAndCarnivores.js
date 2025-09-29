'use strict';

class Animal {
  static alive = [];

  constructor(name = 'Безіменний') {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
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
  bite(target) {
    if (target === undefined || !Animal.alive.includes(target)) {
      return;
    }

    if (target instanceof Carnivore) {
      return;
    }

    if (target instanceof Herbivore && target.hidden === true) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      const index = Animal.alive.findIndex((t) => t === target);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
