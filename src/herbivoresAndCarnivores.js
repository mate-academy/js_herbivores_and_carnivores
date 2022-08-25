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
  bite(victim) {
    const findVictim = Animal.alive.find(beast => beast === victim);
    const indexOfVictim = Animal.alive.indexOf(findVictim);

    if (findVictim.hidden === true || findVictim instanceof Carnivore) {
      return;
    }

    findVictim.health -= 50;

    if (findVictim.health === 0) {
      Animal.alive.splice(indexOfVictim, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
