'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(victim) {
    if (victim instanceof Herbivore
      && victim.hidden === false) {
      victim.health -= 50;

      if (victim.health === 0) {
        Animal.alive = Animal.alive.filter(animal => animal !== victim);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
