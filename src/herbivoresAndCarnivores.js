'use strict';

class Animal {
  static alive = [];

  health;
  name;

  constructor(name = '', health = 100) {
    this.name = name;
    this.health = health;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }

  takeDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      const index = Animal.alive.findIndex((animal) => animal === this);

      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  hidden;

  constructor(name, health, hidden = false) {
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

class Carnivore extends Animal {
  biteStrength;

  constructor(name, health, biteStrength = 50) {
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
