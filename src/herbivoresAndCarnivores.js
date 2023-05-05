'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;

    if (this.health === 0) {
      Animal.alive.remove(this);
    }
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (!victim.hidden && victim instanceof Herbivore) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      const deadAnimal = Animal.alive.indexOf(victim);

      Animal.alive.splice(deadAnimal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
