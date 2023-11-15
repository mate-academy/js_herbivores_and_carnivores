'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health, hidden);
    this.hidden = hidden;
  }

  hide(isHidden) {
    this.hidden = isHidden || true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    const BITE_DMG = 50;

    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= BITE_DMG;
    }

    if (target.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
