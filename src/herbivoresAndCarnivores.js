'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor() {
    super();
    this.hidden = true;
    Animal.alive.push(this);
  };

  bite(herb) {
    if (!herb.hidden) {
      herb.health -= 50;
    }

    Animal.alive = Animal.alive.filter(item => item.health > 0);
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
