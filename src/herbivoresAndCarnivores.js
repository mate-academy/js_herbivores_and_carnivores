'use strict';

const FULL_HEALTH = 100;
const DAMAGE = 50;

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
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(aim) {
    if (aim instanceof Herbivore && !aim.hidden) {
      aim.health -= DAMAGE;
    }

    if (aim.health <= 0) {
      Animal.alive = Animal.alive.filter(person => person.health);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
