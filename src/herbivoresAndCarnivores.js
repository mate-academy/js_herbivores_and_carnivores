'use strict';

const ANIMAL_HELTH = 100;

class Animal {
  constructor(name) {
    this.health = ANIMAL_HELTH;
    this.name = name;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide(isHidden = true) {
    this.hidden = isHidden;
  }
}

class Carnivore extends Animal {
  bite(target) {
    const BITE_DMG = 50;

    if (target instanceof Herbivore && !target.hidden) {
      target.health -= BITE_DMG;
    }

    if (!target.health) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
