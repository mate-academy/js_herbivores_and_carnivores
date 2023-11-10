'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
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
    if (!this.hidden) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  bite(creature) {
    if (creature instanceof Carnivore) {
      return;
    }

    if (!creature.hidden) {
      creature.health -= 50;
    }

    if (creature.health <= 0) {
      const index = Animal.alive.indexOf(creature);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
