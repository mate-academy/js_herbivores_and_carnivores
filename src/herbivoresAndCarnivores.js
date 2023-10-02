'use strict';

class Animal {
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(health, name) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health, name) {
    super(name, health);
  }

  bite(victim) {
    if (victim instanceof Herbivore) {
      if (!victim.hidden) {
        victim.health -= 50;
      }
    }

    if (victim.health <= 0) {
      Animal.alive = Animal.alive.filter((value) => value !== victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
