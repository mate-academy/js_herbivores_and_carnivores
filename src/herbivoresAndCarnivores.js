'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore
      && !animal.hidden) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive
      .filter(({ health }) => health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
