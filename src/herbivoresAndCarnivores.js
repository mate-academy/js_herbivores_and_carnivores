'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(bited) {
    if (bited instanceof Herbivore && !bited.hidden) {
      bited.health -= 50;
    }

    Animal.alive = Animal.alive.filter(item => item.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
