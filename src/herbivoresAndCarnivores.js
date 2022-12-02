'use strict';

class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.canBite = true; // to avoid "useless constructor" error by lint
  }

  bite(victim) {
    const victimIndex = Animal.alive.indexOf(victim);
    const isAlive = victimIndex > -1;
    const isHerbivore = victim instanceof Herbivore;

    if (isHerbivore && isAlive && !victim.hidden) {
      victim.health -= 50;

      if (!victim.health) {
        Animal.alive.splice(victimIndex, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
