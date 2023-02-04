'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(herbivore) {
    if (herbivore.hidden === false && herbivore
      instanceof Herbivore) {
      herbivore.health -= 50;
      Animal.alive = Animal.alive.filter(a => a.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
