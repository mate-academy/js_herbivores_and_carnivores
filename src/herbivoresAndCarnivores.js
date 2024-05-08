'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }

  removeFromAliveList() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
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

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      target.removeFromAliveList();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
