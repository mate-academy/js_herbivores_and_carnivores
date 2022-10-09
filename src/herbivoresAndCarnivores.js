'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  bite(victim) {
    const index = Animal.alive.indexOf(victim);

    if (!victim.hidden && victim instanceof Herbivore) {
      victim.health -= 50;
    };

    if (victim.health === 0) {
      Animal.alive.splice(index, 1);
    };
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
