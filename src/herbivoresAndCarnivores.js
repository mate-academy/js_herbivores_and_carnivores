'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (this.isAlive()) {
      Animal.alive.push(this);
    }
  }

  isAlive() {
    return this.health > 0;
  }

  static removeDead(animal) {
    Animal.alive = Animal.alive.filter(a => a.isAlive());
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
    return this; 
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!(target instanceof Animal)) return;
    if (target instanceof Carnivore) return;
    if (!target.isAlive()) return;
    if (target.hidden) return;

    const damage = 50;
    target.health -= damage;

    if (target.health <= 0) {
      target.health = 0;
      Animal.removeDead(target);
    }
  }
}

module.exports = { Animal, Herbivore, Carnivore };
