'use strict';

const MAX_HEALTH = 100;
const DAMAGE = 50;
const MIN_HEALTH = 0;

class Animal {
  static alive = [];

  constructor(name, health = MAX_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = MAX_HEALTH, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  takeDamage(damage) {
    this.health -= DAMAGE;

    if (this.health <= MIN_HEALTH) {
      this.die();
    }
  }

  hide() {
    this.hidden = true;
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Carnivore extends Animal {
  constructor(name, health = MAX_HEALTH) {
    super(name, health);
  }

  bite(target) {
    if (!(target instanceof Carnivore)) {
      if (!target.hidden) {
        target.health -= DAMAGE;
        target.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
