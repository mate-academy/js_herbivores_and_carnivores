'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health ?? 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = hidden ?? false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  static ANIMAL_DAMAGE = 50;

  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= Carnivore.ANIMAL_DAMAGE;
    }

    if (victim.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
