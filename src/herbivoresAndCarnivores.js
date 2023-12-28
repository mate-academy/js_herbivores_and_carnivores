'use strict';

class Animal {
  static alive = [];

  health = 100;

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  };
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  static defaultDamage = 50;

  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= Carnivore.defaultDamage;

      if (victim.health === 0) {
        const indexVictim = Animal.alive.indexOf(victim);

        Animal.alive.splice(indexVictim, 1);
      }
    };
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
