'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(beast) {
    if (!beast.hidden && beast instanceof Herbivore) {
      beast.health -= 50;
    }

    if (beast.health <= 0) {
      Animal.alive = Animal.alive.filter((obj) => obj.health !== 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
