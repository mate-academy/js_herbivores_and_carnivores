'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    // eslint-disable-next-line no-undef
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    // eslint-disable-next-line no-undef
    super(name);
  }

  bite(target) {
    if (!(target instanceof Herbivore) || target.hidden) {
      return;
    }
    target.health -= 50;

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => a !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
