'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  };
};

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  };

  hide() {
    this.hidden = true;
  };
};

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.carnivore = true;
    Animal.alive.push(this);
  };

  bite(victim) {
    if (!victim.hidden && !victim.carnivore) {
      victim.health -= 50;
    };

    if (victim.health === 0) {
      const i = Animal.alive.indexOf(victim);

      delete Animal.alive[i];
    }
  };
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
