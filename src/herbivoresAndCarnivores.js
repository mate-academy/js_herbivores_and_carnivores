'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if ((herbivore instanceof Herbivore) && herbivore.hidden === false) {
      herbivore.health -= 50;
    }

    if (herbivore.health < 1) {
      const herbivoreIndex = Animal.alive.indexOf(herbivore);

      Animal.alive.splice(herbivoreIndex, 1);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
