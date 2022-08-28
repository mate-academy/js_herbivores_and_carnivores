'use strict';

class Animal {
  constructor(health = 100, name) {
    this.name = name;
    this.name = health;

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
  bite(victim) {
    const indexOfVictim = Animal.alive.indexOf(victim);

    if (victim.hidden === true || victim instanceof Carnivore) {
      return;
    }

    victim.health -= 50;

    if (victim.health === 0) {
      Animal.alive.splice(indexOfVictim, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

