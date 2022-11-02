'use strict';

class Animal {
  constructor(name) {
    this.health = 100;

    Animal.alive.push(this);
  }
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
  constructor(name, victim) {
    super(name, victim);
    this.victim = name;
  };

  bite(victim) {
    if (!victim.hidden && victim instanceof Herbivore) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      const dead = Animal.alive.indexOf(victim);

      Animal.alive.splice(dead, 1);
    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
