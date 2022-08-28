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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(creature) {
    if (creature instanceof Herbivore
      && creature.hidden === false) {
      creature.health -= 50;
    }

    if (creature.health === 0) {
      const isAnimalDead = Animal.alive.indexOf(creature);

      Animal.alive.splice(isAnimalDead, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
