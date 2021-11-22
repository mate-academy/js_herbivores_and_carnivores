'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
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
    this.hidden = !this.hidden;
  }

  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (!(prey instanceof Carnivore) && !prey.hidden) {
      prey.health -= 50;
    }

    if (prey.health <= 0) {
      prey.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
