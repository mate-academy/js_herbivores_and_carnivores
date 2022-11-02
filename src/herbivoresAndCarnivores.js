'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  constructor(name, victim) {
    super(name, victim);
    this.name = name;
  };

  bite(victim) {
    if (!victim.hidden && victim instanceof Herbivore) {
      victim.health -= 50;
    }

    if (!victim.health) {
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
