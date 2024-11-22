'use strict';

class Animal {
  static alive = [];
  constructor(name, health = null) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = null) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = null) {
    super(name, health);
  }
  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
