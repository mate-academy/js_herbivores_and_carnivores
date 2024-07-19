'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name) {
    super(name);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
  }

  bite(victim) {
    if (victim.hidden === true) {
      return;
    }

    victim.health -= 50;

    const victimIndex = Animal.alive.indexOf(victim);

    if (victim.health === 50) {
      const bitedVictim = Animal.alive[victimIndex];

      bitedVictim.health = 50;
    }

    if (victim.health === 0) {
      Animal.alive.splice(victimIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
