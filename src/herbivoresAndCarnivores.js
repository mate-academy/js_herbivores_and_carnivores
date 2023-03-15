'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hidden === false) {
      herbivore.health -= 50;
    }

    Animal.alive = Animal.alive.filter(x => x.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
