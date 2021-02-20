'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(item) {
    if (item instanceof Herbivore && !item.hidden) {
      item.health -= 50;
    }

    if (item.health <= 0) {
      Animal.alive = Animal.alive.filter(
        (stillAlive) => stillAlive.name !== item.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
