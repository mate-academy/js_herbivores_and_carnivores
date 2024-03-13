'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive = Animal.alive || [];
    Animal.alive.push(this);
  }

  static removeFromAlive(victim) {
    Animal.alive = Animal.alive.filter((a) => a !== victim);
  }
}

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
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;

      if (victim.health <= 0) {
        Animal.removeFromAlive(victim);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
