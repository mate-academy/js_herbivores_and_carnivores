'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }
  hide(val) {
    if (val === undefined) {
      this.hidden = true;
    } else if (val === true || false) {
      this.hidden = val;
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }
  bite(val) {
    if (val instanceof Herbivore) {
      if (val.health === 50 && !val.hidden === true) {
        val.health = 0;

        const herbDelIndex = Animal.alive.indexOf(val);

        Animal.alive.splice(herbDelIndex, 1);
      }

      if (val.health === 100 && !val.hidden === true) {
        val.health = 50;
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
