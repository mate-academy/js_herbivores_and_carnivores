'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
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
  bite(creature) {
    const isHunter = creature instanceof Herbivore;

    if (!isHunter || creature.hidden) {
      return;
    }

    creature.health -= 50;

    if (creature.health === 0) {
      creature.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
