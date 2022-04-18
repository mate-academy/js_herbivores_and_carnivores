'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hiddenValue = false) {
    super(name, health);
    this.hidden = hiddenValue;
    Animal.alive.push(this);
  }

  hide() {
    if (this.hidden === true) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
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
