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
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }
  bite(val) {
    if (val instanceof Herbivore && !val.hidden) {
      val.health -= 50;
    }

    if (val.health <= 0) {
      Animal.alive = Animal.alive.filter(item => item.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
