'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  type = 'Herbivore';
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  type = 'Carnivore';
  bite(enemi) {
    if (enemi.type === 'Herbivore' && enemi.hidden !== true) {
      enemi.health -= 50;
    }

    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
