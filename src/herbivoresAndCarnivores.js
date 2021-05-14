'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
