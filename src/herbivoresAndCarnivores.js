'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= Carnivore.defaultDamage;

      if (victim.health === 0) {
        const indexVictim = Animal.alive.indexOf(victim);

        if (indexVictim !== -1) {
          Animal.alive.splice(indexVictim, 1);
        };
      }
    };
  };
}

Carnivore.defaultDamage = 50;

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
