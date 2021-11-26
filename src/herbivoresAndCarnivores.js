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
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(harbivore) {
    if (harbivore instanceof Herbivore && !harbivore.hidden) {
      harbivore.health -= 50;
    }

    Animal.alive = Animal.alive.filter((animal) => animal.health <= 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
