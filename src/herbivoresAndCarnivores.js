'use strict';

class Animal {
  constructor(name, health = 100,) {
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
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(value) {
    if (value instanceof Herbivore && !value.hidden) {
      value.health -= 50;
    }

    if (value.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== value);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
