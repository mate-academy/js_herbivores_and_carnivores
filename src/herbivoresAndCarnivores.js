'use strict';

class Animal {
  constructor(name, health = 100, hidden = false) {
    this.name = name;
    this.health = health;
    this.hidden = hidden;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(anim => anim !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
