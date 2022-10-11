'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

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
  bite(creature) {
    if (creature.hasOwnProperty('hidden') && creature.hidden !== true) {
      creature.health -= 50;

      Animal.alive = Animal.alive.filter(unit => unit.health > 0);
    }
  }
}
Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
