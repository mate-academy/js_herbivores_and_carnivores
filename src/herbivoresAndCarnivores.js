'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.alive = true;
    Animal.alive.push(this);
  }

  static died(target) {
    Animal.alive = Animal.alive.filter((animal) => animal !== target);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = hidden;
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health <= 0) {
        target.alive = false;
        Animal.died(target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
