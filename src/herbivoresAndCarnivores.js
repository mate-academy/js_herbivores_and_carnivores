'use strict';

class Animal {
  constructor(
    name,
    health = 100,
  ) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];
class Herbivore extends Animal {
  constructor(
    name,
    health = 100,
    hidden = false) {
    super(name, health);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(
    name,
    health = 100,
    hidden) {
    super(name, health, hidden);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    }

    if (target.health === 0) {
      Animal.alive = Animal.alive.filter(tar => tar.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
