'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  };
};
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hidden === true || herbivore instanceof Carnivore) {
      return;
    };

    herbivore.health -= 50;

    if (herbivore.health === 0) {
      Animal.alive.splice(Animal.alive.findIndex(el => {
        return el === herbivore;
      }), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
