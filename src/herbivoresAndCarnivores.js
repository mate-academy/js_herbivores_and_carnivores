'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
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
  };
}

class Carnivore extends Animal {
  bite(attack) {
    if (!attack.hidden && attack instanceof Herbivore) {
      attack.health -= 50;
    }

    if (attack.health === 0) {
      Animal.alive = Animal.alive.filter(creature => creature.health !== 0);
    };
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
