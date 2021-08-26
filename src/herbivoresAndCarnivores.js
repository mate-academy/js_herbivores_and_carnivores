'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}
Animal.alive = [];
class Herbivore extends Animal {
  hide(hidden = false) {
    this.hidden = !hidden;
  }
  constructor(name) {
    super(name);
    this.hidden = false;

    const victim = this;

    return victim;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health = victim.health - 50;
    }

    if (victim.health === 0) {
      Animal.alive.pop(victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
