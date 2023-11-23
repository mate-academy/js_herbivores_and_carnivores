'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  constructor(name, health) {
    super();
  }

  bite(target) {
    if (target.hidden === false) {
      target.health = target.health - 50;
    }

    if (target.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(target), 1)
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
