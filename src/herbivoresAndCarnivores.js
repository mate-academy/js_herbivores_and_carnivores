'use strict';

class Animal {
  static add(creature) {
    this.alive.push(creature);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.add(this);
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
  bite(creature) {
    if (creature instanceof Herbivore && !creature.hidden) {
      creature.health -= 50;
    }

    if (creature.health === 0) {
      Animal.alive = Animal.alive.filter(beast => beast.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
