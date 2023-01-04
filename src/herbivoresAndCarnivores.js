'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  removeDead() {
    Animal.alive = Animal.alive.filter(c => c.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }
  bite(victim) {
    if ((!victim.hidden) && (!(victim instanceof Carnivore))) {
      victim.health -= 50;

      if (victim.health === 0) {
        this.removeDead();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
