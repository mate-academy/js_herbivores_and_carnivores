'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  die() {
    const i = Animal.alive.indexOf(this);

    if (i !== -1) {
      Animal.alive.splice(i, 1);
    }
  }

  updateHealth(amount) {
    this.health += amount;

    if (this.health <= 0) {
      this.die();
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
    if (!(target instanceof Herbivore)) {
      return;
    }

    if (target.hidden) {
      return;
    }
    target.updateHealth(-50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
