'use strict';

class Animal {
  constructor(
    name,
    health = 100
  ) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(
    name,
    health,
    hidden = false
  ) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    if (this.hidden) {
      this.hidden = false;
    }

    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if ((beast instanceof Herbivore) && (!beast.hidden)) {
      beast.health -= 50;
    }

    if (beast.health === 0) {
      Animal.alive.pop();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
