'use strict';

class Animal {
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this); // Add the instance to the alive array when created
  }
}
Animal.alive = [];

class Carnivore extends Animal {
  constructor(name) {
    super(100, name);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      const damage = Math.min(target.health, 50);

      target.health -= damage;
      target.checkIfDead();
    }
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(100, name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;

    return this;
  }

  checkIfDead() {
    if (this.health <= 0) {
      const index = Animal.alive.indexOf(this);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
