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
  constructor(name, health = 100, hidden) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;
    }

    const deadAnimal = Animal.alive.indexOf(victim);

    if (victim.health === 0) {
      Animal.alive.splice(deadAnimal, 1)
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
