'use strict';

const ANIMAL_HEALTH = 100;
const DAMAGE_HEALTH = 50;

class Animal {
  constructor(name, health = ANIMAL_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    const VICTIM = victim instanceof Carnivore;

    if (!VICTIM && !victim.hidden) {
      victim.health -= DAMAGE_HEALTH;
    }

    if (victim.health <= 0) {
      Animal.alive = Animal.alive.filter(({ health }) => health > 0);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
