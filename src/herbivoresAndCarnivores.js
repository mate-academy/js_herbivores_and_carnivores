'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(unit) {
    const isHerb = unit instanceof Herbivore;
    const invisible = unit.hidden === false;

    if (isHerb && invisible) {
      const POINT = 50;

      unit.health -= POINT;
    }

    Animal.alive = Animal.alive.filter(elem => elem.health >= 50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
