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
  constructor() {
    super(...arguments);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // constructor() {
  //   super(...arguments);
  // }
  bite(herbivore) {
    if (herbivore instanceof Herbivore && herbivore.hidden === false) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
