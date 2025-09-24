'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

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
    if (!(creature instanceof Herbivore)) {
      return;
    }

    if (creature.hidden === true) {
      return;
    }

    creature.health -= 50;

    if (creature.health <= 0) {
      creature.die();

      creature.health = 0;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
