'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static died(animal) {
    this.alive = this.alive.filter(el => el !== animal);
  };
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(el) {
    if (el instanceof Herbivore && el.hidden === false) {
      el.health -= 50;
    };

    if (el.health === 0) {
      Animal.died(el);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
