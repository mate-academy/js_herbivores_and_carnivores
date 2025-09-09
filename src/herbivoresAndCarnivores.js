'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static _removeFromAlive(instance) {
    const i = Animal.alive.indexOf(instance);

    if (i !== -1) {
      Animal.alive.splice(i, 1);
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
  bite(target) {
    // працює лише для травоїдних, які не ховаються
    if (!(target instanceof Herbivore)) {
      return;
    }

    if (target.hidden) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      Animal._removeFromAlive(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
