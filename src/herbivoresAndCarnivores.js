'use strict';

class Animal {
  constructor(name, health, hidden) {
    this.name = name;
    this.health = health || 100;
    this.hidden = hidden || false;
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health, hidden);
    Animal.alive.push(this);
  };
  hide() {
    if (this.hidden === true) {
      this.hidden = false;
    } else {
      this.hidden = true;
    };
  };
};

class Carnivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health, hidden);
    Animal.alive.push(this);
  };
  bite(victim) {
    if (victim.__proto__ === Carnivore.prototype || (victim.hidden === true)) {
      return victim.health;
    } else {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      const index = Animal.alive.indexOf(victim);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
