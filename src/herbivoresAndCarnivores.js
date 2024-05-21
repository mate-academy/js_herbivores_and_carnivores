'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.alive = true;
    Animal.alive.push(this);
  }

  die() {
    this.alive = false;

    const index = Animal.alive.indexOf(this);

    if (index > -1) {
      Animal.alive.splice(index, 1);
    }
  }

  checkHealth() {
    if (this.health <= 0) {
      this.die();
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
      target.checkHealth();
    }

    Herbivore.health = 100;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
