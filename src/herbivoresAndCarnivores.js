'use strict';

const HEALTH = 100;
const BITE_FORCE = 50;

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = HEALTH;
    Animal.alive.push(this);
  }

  die(name) {
    const animalIndex = Animal.alive.indexOf(this);

    if (animalIndex !== -1) {
      Animal.alive.splice(animalIndex, 1);
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
  constructor(name) {
    super(name);
    this.biteForce = BITE_FORCE;
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= this.biteForce;
    }

    if (target.health <= 0) {
      target.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
