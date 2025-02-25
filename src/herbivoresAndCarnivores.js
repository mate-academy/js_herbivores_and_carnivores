'use strict';

const MIN_HEALTH = 0;
const DEFAULT_HEALTH = 100;
const CARNIVORE_DAMAGE = 50;

class Animal {
  static alive = [];

  constructor(name, health = DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;

    if (health > MIN_HEALTH) {
      Animal.alive.push(this);
    }
  }

  get health() {
    return this._health;
  }

  set health(newValue) {
    this._health = Math.max(MIN_HEALTH, newValue);

    if (this.health === MIN_HEALTH) {
      Animal.alive = Animal.alive.filter(
        (animal) => animal.health > MIN_HEALTH,
      );
    }
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name, health = DEFAULT_HEALTH) {
    super(name, health);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = DEFAULT_HEALTH) {
    super(name, health);
  }

  bite(prey) {
    if (prey instanceof Carnivore || prey.hidden) {
      return;
    }
    prey.health -= CARNIVORE_DAMAGE;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
