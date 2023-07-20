'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

Animal.removeKilled = function() {
  Animal.alive = Animal.alive.filter(animal => animal.health > 0);
};

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    // const victimIndex = Animal.alive.findIndex(animal => animal === victim);

    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
      Animal.removeKilled();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
