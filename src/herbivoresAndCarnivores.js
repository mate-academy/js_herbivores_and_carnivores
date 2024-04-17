'use strict';

const MAX_HEALTH = 100;
const BITE_DAMAGE = 50;

class Animal {
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = MAX_HEALTH;

    Animal.alive.push(this);
  }

  decreaseHealth(amount) {
    this.health -= amount;

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
    if (target instanceof Carnivore) {
      return;
    }

    if (target.hidden) {
      return `${target.name}`;
    }
    target.decreaseHealth(BITE_DAMAGE);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
