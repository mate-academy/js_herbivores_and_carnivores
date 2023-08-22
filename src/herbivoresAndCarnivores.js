'use strict';

const FULL_HEALTH = 100;
const BITE_DAMAGE = 50;
const DEAD = 0;

class Animal {
  constructor(name) {
    this.health = FULL_HEALTH;
    this.name = name;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide(value) {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(object) {
    if (object instanceof Carnivore || object.hidden) {
      return;
    }
    object.health -= BITE_DAMAGE;

    if (object.health <= DEAD) {
      Animal.alive = Animal.alive.filter(animal => animal.health > DEAD);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
