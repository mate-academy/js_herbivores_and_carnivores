'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeFromAlive(animal) {
    const index = Animal.alive.indexOf(animal);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }

  die() {
    Animal.removeFromAlive(this);
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
  constructor(name) {
    super();
  }

  bite(victim) {
    if (victim instanceof Carnivore) {
      return;
    }

    if (victim instanceof Herbivore && victim.hidden) {
      return;
    }

    victim.health -= 50;

    if (victim.health <= 0) {
      victim.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
