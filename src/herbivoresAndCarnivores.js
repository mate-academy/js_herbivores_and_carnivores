'use strict';

const FULL_HEALTH = 100;
const BITE_DAMAGE = 50;

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = FULL_HEALTH;
    Animal.alive.push(this);
  }

  removeIfDead() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
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
    if (!(target instanceof Herbivore) || target.hidden) {
      return;
    }

    target.health -= BITE_DAMAGE;
    target.removeIfDead();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
