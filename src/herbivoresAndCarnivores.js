'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = this.hidden
      ? Boolean(0)
      : true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== victim);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
