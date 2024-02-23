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
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(unit) {
    const POINT = 50;
    const LIFE_LIMIT = 0;
    const isHerb = unit instanceof Herbivore;
    const invisible = unit.hidden === false;

    if (isHerb && invisible) {
      unit.health -= POINT;
    }

    Animal.alive = Animal.alive.filter(item => item.health > LIFE_LIMIT);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
