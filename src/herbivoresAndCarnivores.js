'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100, hidden = true) {
    this.name = name;
    this.health = health;
    this.hidden = hidden;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health, hidden);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    };

    if (herbivore.health === 0) {
      const index = Animal.alive.indexOf(herbivore);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
