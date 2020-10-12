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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (!(victim instanceof Carnivore) && victim.hidden === false) {
      victim.health -= 50;

      if (victim.health === 0) {
        const victimIndexAmongAlive = Animal.alive.indexOf(victim);

        Animal.alive.splice(victimIndexAmongAlive, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
