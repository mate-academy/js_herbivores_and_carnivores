'use strict';

class Animal {
  static alive = [];

  static removeDied() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }

  takeDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      Animal.removeDied();
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      const damage = 50;

      target.takeDamage(damage);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
