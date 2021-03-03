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
  constructor(name) {
    super();
    this.name = name;
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }

  bite(opponent) {
    if (opponent instanceof Herbivore && opponent.hidden === false) {
      opponent.health -= 50;
    }

    if (opponent.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(opponent), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
