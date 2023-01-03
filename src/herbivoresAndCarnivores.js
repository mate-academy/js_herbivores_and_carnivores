'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
  }

  alivePush() {
    Animal.alive.push(this);
  }

  aliveRemove() {
    Animal.alive = Animal.alive.filter(c => c.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.alivePush();
  }

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.alivePush();
  }
  bite(victim) {
    if ((!victim.hidden) && (!(victim instanceof Carnivore))) {
      victim.health -= 50;

      if (victim.health === 0) {
        this.aliveRemove();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
