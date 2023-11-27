'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    this.addToAliveList();
  }

  addToAliveList() {
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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim.hidden === false && this.hidden === undefined) {
      victim.health -= 50;

      if (victim.health === 0) {
        for (let i = 0; i < Animal.alive.length; i++) {
          if (Animal.alive[i].name === victim.name) {
            delete Animal.alive[i];
          }
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
