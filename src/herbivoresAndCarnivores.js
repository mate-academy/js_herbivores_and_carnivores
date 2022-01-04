'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hidden === false && herbivore.hidden !== undefined) {
      herbivore.health -= 50;
    }

    Animal.alive = Animal.alive.filter((animal) => animal !== herbivore);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
