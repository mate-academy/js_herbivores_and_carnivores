'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  checkHealth() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => a !== this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false; // required by tests
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!(target instanceof Herbivore)) {
      return;
    }

    if (target.hidden) {
      return;
    }

    target.health -= 50;
    target.checkHealth();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
