'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }

  setHealth(newHealth) {
    this.health = newHealth;

    if (this.health <= 0) {
      this.die();
    }
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.setHealth(target.health - 50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
