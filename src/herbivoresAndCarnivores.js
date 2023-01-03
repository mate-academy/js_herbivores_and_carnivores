'use strict';

class Animal {
  // write your code here

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
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
  // write your code here
  constructor(name) {
    super(name);
    this.alivePush();
  }

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  // write your code here
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
