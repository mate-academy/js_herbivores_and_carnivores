'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

Animal.alive = [];

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && (victim.hidden === false)) {
      victim.health -= 50;
    }

    Animal.alive = Animal.alive.filter(alive => alive.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
