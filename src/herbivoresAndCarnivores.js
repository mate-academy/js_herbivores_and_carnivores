'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

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
    if (!(victim instanceof Carnivore) && !victim.hidden) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(victim), 1);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
