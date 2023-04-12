'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  kill() {
    Animal.alive = Animal.alive.filter(a => a.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, visibility = false) {
    super(name, health);
    this.hidden = visibility;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden || animal instanceof Carnivore) {
      return;
    }

    animal.health -= 50;

    if (animal.health <= 0) {
      animal.kill();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
