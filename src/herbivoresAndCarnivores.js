'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(
    health,
    name) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(
    health,
    name,
    bite1) {
    super(health, name);
  }

  bite(prey) {
    if (prey.hidden === false && prey instanceof Herbivore) {
      prey.health -= 50;
    }

    Animal.alive = Animal.alive.filter(function(item) {
      return item.health > 0;
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
