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
  bite(sacrifice) {
    if (sacrifice instanceof Herbivore && !sacrifice.hidden) {
      sacrifice.health -= 50;
    }

    if (sacrifice.health === 0) {
      Animal.alive = Animal.alive.filter(beastie => beastie.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
