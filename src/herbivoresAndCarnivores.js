'use strict';

const NAME = '';
const HEALTH = 100;

class Animal {
  static alive = [];

  health;
  name;

  constructor(name = NAME, health = HEALTH) {
    this.name = name;
    this.health = health;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }

  takeDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

const HIDDEN = false;

class Herbivore extends Animal {
  hidden;

  constructor(name, health, hidden = HIDDEN) {
    super(name, health);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }

  takeDamage(damage) {
    if (!this.hidden) {
      super.takeDamage(damage);
    }
  }
}

const BITE_STRENGTH = 50;

class Carnivore extends Animal {
  biteStrength;

  constructor(name, health, biteStrength = BITE_STRENGTH) {
    super(name, health);

    this.biteStrength = biteStrength;
  }

  bite(target) {
    if (!(target instanceof Herbivore)) {
      return;
    }

    target.takeDamage(this.biteStrength);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
