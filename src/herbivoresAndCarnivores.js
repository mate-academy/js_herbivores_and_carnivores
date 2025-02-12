'use strict';

class Animal {
  health = 100;
  static alive = [];
  constructor(name) {
    this.name = name;
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
    if (victim.hidden) {
      return;
    }

    if (victim instanceof Herbivore) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      victim.health = 0;
    }
    Animal.alive = Animal.alive.filter((x) => x.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
