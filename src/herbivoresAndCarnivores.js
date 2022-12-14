'use strict';

class Animal {
  constructor(name, hidden = false) {
    this.name = name;
    this.health = 100;
    this.hidden = hidden;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(allmostDead) {
    if (allmostDead.hidden === false && allmostDead instanceof Herbivore) {
      allmostDead.health = allmostDead.health - 50;
      Animal.alive = Animal.alive.filter((AliveBeast) => AliveBeast.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
